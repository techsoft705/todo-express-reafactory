var express = require('express')
var router = express.Router()
var todosModel = require('../models/todos')

/* GET todos results. */
router.get('/todos', async function (req, res, next) {
  const todos = await todosModel.find({}, { __v: 0 })
  res.status(200).json({ message: 'todos berhasil ditampilkan', todos: todos })
})

/* POST todos add. */
router.post('/todos', async function (req, res, next) {
  const { title } = req.body
  await todosModel.create({ title })
  res.status(200).json({ message: 'todos berhasil ditambahkan' })
})

/* GET todos result. */
router.get('/todos/:id', async function (req, res, next) {
  const { id } = req.params
  const todo = await todosModel.findById(id)
  res.status(200).json({ message: 'todos berhasil ditampilkan', todos: todo })
})

/* DELETE todos delete. */
router.delete('/todos/:id', async function (req, res, next) {
  const { id } = req.params
  const todo = await todosModel.findByIdAndDelete(id)
  if (!todo) {
    res.status(200).json({ message: 'todos tidak ditemukan' })
  }

  res.status(200).json({ message: 'todos berhasil dihapus' })
})

/* PUT todos delete. */
router.put('/todos/:id', async function (req, res, next) {
  const { id } = req.params
  const { title } = req.body

  const todo = await todosModel.findByIdAndUpdate(id, { title })
  if (!todo) {
    res.status(200).json({ message: 'todos tidak ditemukan' })
  }

  res.status(200).json({ message: 'todos berhasil diperbarui' })
})

module.exports = router
