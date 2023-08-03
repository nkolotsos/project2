const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    name: { 
        type: String, 
        required: true 
      },
    price : {
        type: Number,
        min: 1,
        required: true
    },
    condition: {
        type: String,
        enum: ["New", "Good", "Used", "Worn"],
        required: true
    },
    image: {
        type: String
    },
    dateListed: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Listing', listingSchema);