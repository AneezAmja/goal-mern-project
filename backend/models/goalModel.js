const mongoose = require("mongoose");

const goalSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId, // Getting the _id generated from Mongodb
        required: true,
        ref: 'User', // Allows us to know what this ObjectId relates too i.e. the User
    },
    text: {
        type: String,
        required:[true, 'please add a text value']
    }
}, {
    timestamps: true
}) 


module.exports = mongoose.model('Goal', goalSchema)