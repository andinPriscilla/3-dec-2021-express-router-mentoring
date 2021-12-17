const mongoose = require('mongoose');

const {Schema} = mongoose;

const UserSchema = new Schema({
    firstName: {
        type: "string",
        required: true,
    },
    email: {
        type: "string",
        required: true,
    },
    password: {
        type: "string",
        required: true
    }
});

module.exports = mongoose.model("User",UserSchema); // Users on this line was given by me to replace myFirstDataBase inthe server that was used in the mongoose.connect
