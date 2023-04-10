const connection = require('../services/connection')

exports.insertLicitatii = (req, res) => {
  const data = req.body
  //console.log('insert animalPJ: ', req.body)
  connection.query(
    'INSERT INTO licitatii (id_persoana, nume, descriere, pret_pornire, data_incepere, data_finalizare) VALUES (?,?,?,?,?,?)',
    [
      data.id,
      data.nume,
      data.descriere,
      data.pret_pornire,
      data.data_incepere,
      data.data_finalizare,
    ],
    (error, results) => {
      if (error) {
        console.error(
          'A apărut o eroare la inserarea datelor în tabela tip: ',
          error
        )
        res
          .status(500)
          .send('A apărut o eroare la inserarea datelor în tabela tip.')
        return
      }
    }
  )
}

exports.getLicitatii = (req, res) => {
  connection.query(
    'SELECT licitatii.*, persoana.tip_persoana, persoana.nume_denumire, persoana.prenume_domeniul, persoana.numar_telefon, persoana.email FROM licitatii INNER JOIN persoana ON licitatii.id_persoana = persoana.id_persoana ',
    (error, results) => {
      if (error) {
        console.error(
          'A apărut o eroare la afisarea datelor din tabela teren: ',
          error
        )
        res
          .status(500)
          .send('A apărut o eroare la afisarea datelor din tabela teren.')
        return
      }

      res.send(results)
    }
  )
}

exports.getGradAcces = (req, res) => {
  const id = req.params.id
  console.log('id-ul este: ', id)
  connection.query(
    'SELECT grad_acces FROM persoana WHERE id_persoana = ?',
    [id],

    (error, results) => {
      if (error) {
        console.error('A apărut o eroare la afisarea investitiei: ', error)
        res.status(500).send('A apărut o eroare la afisarea investitiei.')
        return
      }

      console.log('Rezultate:', results)
      res.send(results)
    }
  )
}
