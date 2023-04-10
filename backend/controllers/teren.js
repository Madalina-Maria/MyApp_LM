const connection = require('../services/connection')

exports.getTerenuriPJ = (req, res) => {
  connection.query(
    'SELECT teren.*, categorie_teren.nume_categorie, tip_teren.nume_tip FROM teren INNER JOIN tip_teren ON teren.id_tip_teren = tip_teren.id_tip_teren INNER JOIN categorie_teren ON teren.id_categorie_teren = categorie_teren.id_categorie_teren',
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

exports.getOneTerenPJ = (req, res) => {
  const data = req.body
  console.log(data)
  connection.query(
    'SELECT * FROM teren WHERE nume_teren = ?',
    [data.nume],

    (error, results) => {
      if (error) {
        console.error('A apărut o eroare la afisarea terenului: ', error)
        res.status(500).send('A apărut o eroare la afisarea terenului.')
        return
      }

      console.log('Rezultate:', results)
      res.send(results)
    }
  )
}

exports.updateTeren = (req, res) => {
  const data = req.body
  console.log('Data este: ', data)
  console.log('id-ul este: ', data.id)
  connection.query(
    'UPDATE teren SET nume_teren=?, suprafata=?, lungime=?, latime=?, localizare=?, vecin_dreapta=?, vecin_stanga=?, vecin_fata=?, vecin_spate=?, fermier=?, culturi_anterioare=?, detalii=?  WHERE id_teren= ?',
    [
      data.nume,
      data.suprafata,
      data.lungime,
      data.latime,
      data.localizare,
      data.vecin_dreapta,
      data.vecin_stanga,
      data.vecin_fata,
      data.vecin_spate,
      data.fermier,
      data.culturi_anterioare,
      data.detalii,
      data.id,
    ],
    (error, results) => {
      if (error) {
        console.error(
          'A apărut o eroare la inserarea datelor în tabela teren: ',
          error
        )
        res
          .status(500)
          .send('A apărut o eroare la inserarea datelor în tabela teren.')
        return
      }
      console.log('Datele au fost modificate cu succes.')
    }
  )
}

exports.deleteTeren = (req, res) => {
  const id = req.params.id
  console.log('tipul id-ului este: ', typeof id)
  console.log('id-ul este: ', id)
  connection.query(
    'DELETE FROM teren WHERE id_teren = ?',
    [id],
    (error, results) => {
      if (error) {
        console.error(
          'A apărut o eroare la stergerea datelor din tabela teren: ',
          error
        )
        res
          .status(500)
          .send('A apărut o eroare la stergerea datelor din tabela teren.')
        return
      }
      console.log('Datele au fost sterse cu succes.')
    }
  )
}

exports.insertTerenPJ = (req, res) => {
  const data = req.body
  console.log('insert terenPJ: ', req.body)

  connection.query(
    'INSERT INTO teren (id_persoana, id_tip_teren, id_categorie_teren, nume_teren, suprafata, lungime, latime, localizare, vecin_dreapta, vecin_stanga, vecin_fata, vecin_spate, fermier, culturi_anterioare, detalii ) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
    [
      data.id_persoana,
      data.tip,
      data.categorie,
      data.nume,
      data.suprafata,
      data.lungime,
      data.latime,
      data.localizare,
      data.vecin_dreapta,
      data.vecin_stanga,
      data.vecin_fata,
      data.vecin_spate,
      data.fermier,
      data.culturi_anterioare,
      data.detalii,
    ],
    (error, results) => {
      if (error) {
        console.error(
          'A apărut o eroare la inserarea datelor în tabela teren: ',
          error
        )
        res
          .status(500)
          .send('A apărut o eroare la inserarea datelor în tabela teren.')
        return
      }
    }
  )
}

exports.getTipTerenPJ = (req, res) => {
  connection.query('SELECT * FROM tip_teren', (error, results) => {
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

exports.getCategorieTerenPJ = (req, res) => {
  connection.query('SELECT * FROM categorie_teren', (error, results) => {
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
