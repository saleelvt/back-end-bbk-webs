const mongoose = require('mongoose');


const blogSchema = new mongoose.Schema(
    {
    title : {
        type : String,
        required : true
    },
    imageFile : {
        type :File,
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
    postLink : {
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

const blog = mongoose.model('blog',blogSchema);

module.exports = blog;