const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose')
const Schema = mongoose.Schema
// const bcrypt = require('bcrypt')


const staffSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
}, {timestamps: true})

staffSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('staff', staffSchema)