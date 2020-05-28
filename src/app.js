import express from 'express'
import { fibonacci } from './fibonacci'
const app = express()

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send('hello world')
})

app.get('/fibonacci/:number', function (req, res) {
  const result = fibonacci(req.params.number)
  console.log('result: ',result)
  res.send(''+result)
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))
