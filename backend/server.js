const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const fs = require('fs')
const mysql = require('mysql')
const { connected } = require('process')
require('dotenv').config()

const app = express()

app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.json({ limit: '50mb' }))

fs.readdirSync('./routes').map((r) => app.use('/api', require('./routes/' + r))) // loop tr files

const port = process.env.PORT
app.listen(process.env.PORT || 8000, () => {
  console.log(`backend ruleaza pe portul ${port}`)
})
