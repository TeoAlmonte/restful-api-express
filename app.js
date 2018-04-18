import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import routes from './src/routes/Routes'

const app = express()
const PORT = 3000

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/DBforAPI')
app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())

routes(app)

app.get('/', (req, res) =>
  res.send('page loaded')
)

app.listen(PORT, () =>
  console.log(`Running on ${PORT}`)
)