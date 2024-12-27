const { promiseImpl } = require('ejs')
const { default: mongoose } = require('mongoose')

const taskSchema = new mongoose.Schema({
    titel : String,
    email : String,
    password : String,
})

const task = mongoose.model('taskTable',taskSchema);

module.exports = task;