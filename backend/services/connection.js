const mysql2 = require('mysql2')

const connection = mysql2.createConnection({
  user: 'root',
  host: 'localhost',
  password: '',
  database: 'licenta_mada',
})

connection.connect((err) => {
  if (!err) {
    console.log('Db is connected')
  } else {
    console.log(err)
  }
})

module.exports = connection
