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
        default: function() {
            const currentDate = new Date();
            const day = currentDate.getDate();
            const month = currentDate.getMonth() + 1;
            const year = currentDate.getFullYear().toString().slice(-2);
            const formattedDate = `${day.toString().padStart(2, '0')}-${month.toString().padStart(2, '0')}-${year}`;
            return formattedDate;
        }
    },
    boardgame: {
        type: Schema.Types.ObjectId,
        ref: 'Boardgame'
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
      },
      userName: String,
      userAvatar: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Listing', listingSchema);