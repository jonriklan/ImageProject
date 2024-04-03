const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ImageSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author:{
        type: String,
    },
    img:
    {
        type: String,
    },
    timestamp: {
        type: String,
        default: Date.now()
    },
})

const Image = mongoose.model("Image", ImageSchema);

module.exports = Image;