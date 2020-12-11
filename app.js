var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var mongoose = require('mongoose')
var logger = require('morgan')

var todosRouter = require('./routes/todos')

var app = express()

mongoose.connect('mongodb://localhost:27017/todos', { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
  if (err) console.log('database not connected')
  console.log('data connected')
})

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use(todosRouter)

app.listen(3000, () => console.log('server is running'))
