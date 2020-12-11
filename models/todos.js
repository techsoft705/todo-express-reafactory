const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: [true, 'title is required']
  }
})

module.exports = mongoose.model('todos', UserSchema)
