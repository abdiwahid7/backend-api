const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 const studentSchema = new Schema({
    firstname: {
        type: String,
        required: [true, 'Firstname is required']
    },
    lastname: {
        type: String,
        required: [true, 'Lastname is required']
    },
    gender: {
        type: String,
        enum: ['male', 'female'],
        required: true
    }
 });

 const student = mongoose.model('student', studentSchema);
 module.exports = student;