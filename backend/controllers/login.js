const crypto = require('crypto-js')
const connection = require('../services/connection')
const jwt = require('jsonwebtoken')
const JWT_SECRET = 'secret key'

exports.loginSecure = (req, res) => {
  const data = req.body

  // Verificare existenta utilizator cu emailul dat
  connection.query(
    'SELECT * FROM persoana WHERE email = ?',
    [data.email],
    (err, result) => {
      if (err) throw err
      if (result.length > 0) {
        // Verificare parola criptata
        var bytes = crypto.AES.decrypt(
          result[0].parola,
          '12345678123456781234567812345678'
        )
        var dencryptedPassword = JSON.parse(bytes.toString(crypto.enc.Utf8))
        console.log('Parola trimisa este: ', data.parola)
        console.log('parola decriptata este: ', dencryptedPassword)

        if (data.parola === dencryptedPassword) {
          const persoana = {
            id: result[0].id_persoana,
            nume: result[0].nume_denumire,
            grad_acces: result[0].grad_acces,
          }
          res.send({ user: persoana })
          console.log('Autentificare reusita!')
        } else {
          res.send('Parola incorecta!')
        }
      } else {
        res.send('Utilizatorul nu exista!')
      }
    }
  )
}

exports.loginProtect = (req, res) => {
  const authHeader = req.headers.authorization
  if (authHeader) {
    const token = authHeader.split(' ')[1]
    try {
      const payload = jwt.verify(token, JWT_SECRET)
      res.send(`Welcome ${payload.email}!`)
    } catch (err) {
      res.status(403).send('Invalid token')
    }
  } else {
    res.status(401).send('Authorization header missing')
  }
}
