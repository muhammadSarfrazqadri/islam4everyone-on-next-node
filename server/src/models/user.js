const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    userName:{
        type: String,
        required: true,
        unique: true,
        minlength: 3,
        maxlength: 26,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
        minlength: 8,
        maxlength: 20,
    },
    role:{
        type: String,
        enum: ['user', 'admin'],
        default: 'user',
    },
    createdAt:{ type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);