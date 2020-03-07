import express from 'express'
import morgan from 'morgan'
import bodyParser from 'body-parser'

const app = express()

app.use(morgan('dev'))
app.use(bodyParser.json())

require('./routes')(app)

app.listen(5000, () => {
  console.log('Server listening at port 5000');
})