const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema

const CakeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    yumFactor:[
    {
        value:{
            type: Number,
            required: true

        }
    }
    ],
    comment: [
        {
            text: {
                type: String,
                required: true
            },
            date: {
                type: Date,
                default: Date.now
            }
        }
    ]
});

module.exports = Cake = mongoose.model('cake', CakeSchema);