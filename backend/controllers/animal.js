const connection = require('../services/connection')

exports.insertAnimalPJ = (req, res) => {
  const data = req.body
  //console.log('insert animalPJ: ', req.body)
  connection.query(
    'INSERT INTO tip (domeniul, nume) VALUES (?,?)',
    [data.domeniul, data.tip],
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

  connection.query(
    'INSERT INTO categorie (nume) VALUES (?)',
    [data.categorie],
    (error, results) => {
      if (error) {
        console.error(
          'A apărut o eroare la inserarea datelor în tabela categorie: ',
          error
        )
        res
          .status(500)
          .send('A apărut o eroare la inserarea datelor în tabela categorie.')
        return
      }
    }
  )
  connection.query(
    'INSERT INTO animal (nume, adresa_locatia, detalii ) VALUES (?,?,?)',
    [data.nume, data.locatia, data.detalii],
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

exports.getAnimalePJ = (req, res) => {
  connection.query('SELECT * FROM animal', (error, results) => {
    if (error) {
      console.error(
        'A apărut o eroare la afisarea datelor din tabela animal: ',
        error
      )
      res
        .status(500)
        .send('A apărut o eroare la afisarea datelor din tabela animal.')
      return
    }

    res.send(results)
  })
}

exports.updateAnimal = (req, res) => {
  const data = req.body
  //console.log('Data este: ', data)
  //console.log('id-ul este: ', data.id)
  connection.query(
    'UPDATE animal SET nume=?, adresa_locatia=?, detalii=?  WHERE id_animal= ?',
    [data.nume, data.locatie, data.detalii, data.id],
    (error, results) => {
      if (error) {
        console.error(
          'A apărut o eroare la inserarea datelor în tabela animal: ',
          error
        )
        res
          .status(500)
          .send('A apărut o eroare la inserarea datelor în tabela animal.')
        return
      }
      console.log('Datele au fost modificate cu succes.')
    }
  )
}

exports.deleteAnimal = (req, res) => {
  const id = req.params.id
  //console.log('tipul id-ului este: ', typeof id)
  //console.log('id-ul este: ', id)
  connection.query(
    'DELETE FROM animal WHERE id_animal = ?',
    [id],
    (error, results) => {
      if (error) {
        console.error(
          'A apărut o eroare la stergerea datelor din tabela animal: ',
          error
        )
        res
          .status(500)
          .send('A apărut o eroare la stergerea datelor din tabela animal.')
        return
      }
      console.log('Datele au fost sterse cu succes.')
    }
  )
}

exports.insertInvestitieAnimalPJ = (req, res) => {
  const data = req.body
  //console.log('insert investitieAnimalPJ: ', req.body)
  connection.query(
    'INSERT INTO investitie (id_animal, nume, domeniul, pret_estimat, pret_final, data_investitie, detalii) VALUES (?,?,?,?,?,?,?)',
    [
      data.id,
      data.nume_investitie,
      data.domeniul,
      data.pret_estimat,
      data.pret_final,
      data.data_investitie,
      data.detalii,
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
      console.log('Datele au fost introduse cu succes.')
    }
  )
}

exports.getInvestitieAnimalePJ = (req, res) => {
  const id = req.params.id
  //console.log('id-ul este: ', id)
  connection.query(
    'SELECT * FROM investitie WHERE id_animal = ?',
    [id],

    (error, results) => {
      if (error) {
        console.error('A apărut o eroare la afisarea investitiei: ', error)
        res.status(500).send('A apărut o eroare la afisarea investitiei.')
        return
      }

      // console.log('Rezultate:', results)
      res.send(results)
    }
  )
}

exports.deleteInvestitie = (req, res) => {
  const id = req.params.id
  //console.log('tipul id-ului este: ', typeof id)
  //console.log('id-ul este: ', id)
  connection.query(
    'DELETE FROM investitie WHERE id_investitie = ?',
    [id],
    (error, results) => {
      if (error) {
        console.error(
          'A apărut o eroare la stergerea datelor din tabela investitie: ',
          error
        )
        res
          .status(500)
          .send('A apărut o eroare la stergerea datelor din tabela investitie.')
        return
      }
      console.log('Datele au fost sterse cu succes.')
    }
  )
}

exports.updateInvestitie = (req, res) => {
  const data = req.body
  //console.log('Data este: ', data)
  //console.log('id-ul este: ', data.id)
  connection.query(
    'UPDATE investitie SET nume=?, pret_estimat=?, pret_final=?, data_investitie=?, detalii=? WHERE id_investitie= ?',
    [
      data.nume_investitie,
      data.pret_estimat,
      data.pret_final,
      data.data_investitie,
      data.detalii,
      data.id,
    ],
    (error, results) => {
      if (error) {
        console.error(
          'A apărut o eroare la inserarea datelor în tabela investitie: ',
          error
        )
        res
          .status(500)
          .send('A apărut o eroare la inserarea datelor în tabela investitie.')
        return
      }
      console.log('Datele au fost modificate cu succes.')
    }
  )
}

exports.insertProdusAnimalPJ = (req, res) => {
  const data = req.body
  //console.log('insert produsAnimalPJ: ', req.body)
  connection.query(
    'INSERT INTO produs_folosit (id_investitie, nume, pret, producator, cantitate) VALUES (?,?,?,?,?)',
    [
      data.id_investitie,
      data.nume_produs,
      data.pret_produs,
      data.producator,
      data.cantitate,
    ],
    (error, results) => {
      if (error) {
        console.error(
          'A apărut o eroare la inserarea datelor în tabela produs_folosit: ',
          error
        )
        res
          .status(500)
          .send(
            'A apărut o eroare la inserarea datelor în tabela produs_folosit.'
          )
        return
      }
      console.log('Datele au fost introduse cu succes.')
    }
  )
}

exports.getProdusAnimalePJ = (req, res) => {
  const id = req.params.id
  //console.log('id-ul este: ', id)
  connection.query(
    'SELECT * FROM produs_folosit WHERE id_investitie = ?',
    [id],

    (error, results) => {
      if (error) {
        console.error('A apărut o eroare la afisarea produsului: ', error)
        res.status(500).send('A apărut o eroare la afisarea produsului.')
        return
      }

      //console.log('Rezultate:', results)
      res.send(results)
    }
  )
}

exports.deleteProdus = (req, res) => {
  const id = req.params.id
  //console.log('tipul id-ului este: ', typeof id)
  console.log('id-ul este: ', id)
  connection.query(
    'DELETE FROM produs_folosit WHERE id_produs_folosit = ?',
    [id],
    (error, results) => {
      if (error) {
        console.error(
          'A apărut o eroare la stergerea datelor din tabela produs_folosit: ',
          error
        )
        res
          .status(500)
          .send(
            'A apărut o eroare la stergerea datelor din tabela produs_folosit.'
          )
        return
      }
      console.log('Datele au fost sterse cu succes.')
    }
  )
}

exports.updateProdus = (req, res) => {
  const data = req.body
  //console.log('Data este: ', data)
  //console.log('id-ul este: ', data.id)
  connection.query(
    'UPDATE produs_folosit SET nume=?, pret=?, producator=?, cantitate=? WHERE id_produs_folosit= ?',
    [data.nume, data.pret, data.producator, data.cantitate, data.id],
    (error, results) => {
      if (error) {
        console.error(
          'A apărut o eroare la inserarea datelor în tabela produs_folosit: ',
          error
        )
        res
          .status(500)
          .send(
            'A apărut o eroare la inserarea datelor în tabela produs_folosit.'
          )
        return
      }
      console.log('Datele au fost modificate cu succes.')
    }
  )
}
