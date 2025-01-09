const mongoose = require('mongoose');


const blogTwoSchema = new mongoose.Schema(
    {
    title : {
        type : String,
        required : true
    },
    imageFile : {
        type : File,
        required : true
    },
    date : {
        type : String,
        required : true
    },
    category : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    link : {
        type : String
    },
    categoryLink : {
        type : String
    }
},
{
    timestamps : true
}
)

const blogTwo = mongoose.model('blogTwo',blogTwoSchema);

module.exports = blogTwo;