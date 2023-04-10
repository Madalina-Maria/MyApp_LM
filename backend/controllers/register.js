const crypto = require('crypto-js')
const connection = require('../services/connection')

exports.registerSecure = (req, res) => {
  let data = req.body // data trimis de pe frontend
  console.log('data este egal cu: ', data)

  const encrypted = crypto.AES.encrypt(
    JSON.stringify(data.parola),
    '12345678123456781234567812345678'
  ).toString()

  connection.query(
    'INSERT INTO strada (id_localitate, nume_strada) VALUES (?,?)',
    [data.localitate, data.strada],
    (error, results) => {
      if (error) {
        console.error(
          'A apărut o eroare la inserarea datelor în tabela strada: ',
          error
        )
        res
          .status(500)
          .send('A apărut o eroare la inserarea datelor în tabela strada.')
        return
      }

      console.log('Datele au fost inserate cu succes în tabela strada!')
      const idStrada = results.insertId

      connection.query(
        'INSERT INTO numar_locuinta (numar_locuinta, id_strada) VALUES (?,?)',
        [data.numar_locuinta, idStrada],
        (error, results) => {
          if (error) {
            console.error(
              'A apărut o eroare la inserarea datelor în tabela numar_locuinta: ',
              error
            )
            res
              .status(500)
              .send(
                'A apărut o eroare la inserarea datelor în tabela numar_locuinta.'
              )
            return
          }

          console.log(
            'Datele au fost inserate cu succes în tabela numar_locuinta!'
          )
          const numarLocuintaId = results.insertId

          connection.query(
            'INSERT INTO persoana (id_numar_locuinta, id_strada, id_localitate, id_judet, id_tara, grad_acces, tip_persoana, nume_denumire, prenume_domeniul, data_aparitie, cnp_cui, numar_telefon, email, parola) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
            [
              numarLocuintaId,
              idStrada,
              data.localitate,
              data.judet,
              data.tara,
              data.gradAcces,
              data.tipPersoana,
              data.nume,
              data.prenume,
              data.data_nasterii,
              data.cnp,
              data.nr_telefon,
              data.email,
              encrypted,
            ],
            (error, results) => {
              if (error) {
                console.error(
                  'A apărut o eroare la inserarea datelor în tabela persoana: ',
                  error
                )
                res
                  .status(500)
                  .send(
                    'A apărut o eroare la inserarea datelor în tabela persoana.'
                  )
                return
              }

              console.log(
                'Datele au fost inserate cu succes în tabela persoana!'
              )

              res
                .status(200)
                .send(
                  'Datele au fost inserate cu succes în toate cele trei tabele.'
                )
            }
          )
        }
      )
    }
  )

  connection.query(
    'INSERT INTO cod_postal (id_localitate, numar_cod_postal) VALUES (?,?)',
    [data.localitate, data.cod_postal],
    (error, results) => {
      if (error) {
        console.error(
          'A apărut o eroare la inserarea datelor în tabela cod_postal: ',
          error
        )
        res
          .status(500)
          .send('A apărut o eroare la inserarea datelor în tabela cod_postal.')
        return
      }

      console.log('Datele au fost inserate cu succes în tabela cod_postal!')
    }
  )
}
exports.getTara = (req, res) => {
  connection.query('SELECT * FROM tara', (error, results) => {
    if (error) {
      console.error(
        'A apărut o eroare la afisarea datelor din tabela tip: ',
        error
      )
      res
        .status(500)
        .send('A apărut o eroare la afisarea datelor din tabela tip.')
      return
    }
    res.send(results)
  })
}

exports.getJudet = (req, res) => {
  connection.query('SELECT * FROM judete', (error, results) => {
    if (error) {
      console.error(
        'A apărut o eroare la afisarea datelor din tabela tip: ',
        error
      )
      res
        .status(500)
        .send('A apărut o eroare la afisarea datelor din tabela tip.')
      return
    }
    res.send(results)
  })
}

exports.getLocalitate = (req, res) => {
  connection.query('SELECT * FROM localitati', (error, results) => {
    if (error) {
      console.error(
        'A apărut o eroare la afisarea datelor din tabela tip: ',
        error
      )
      res
        .status(500)
        .send('A apărut o eroare la afisarea datelor din tabela tip.')
      return
    }
    res.send(results)
  })
}
