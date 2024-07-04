const express = require('express');
const routes = require('./routes')
require('express-async-errors')
const app = express()

app.use(express.json())
app.use(routes)
app.use((error, _request, response, next) => {
  console.log(error)
  return error ? response.sendStatus(500) : next()
})

app.listen(3000, () => console.log('server started at http://localhost:3000'));
