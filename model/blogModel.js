const mongoose = require('mongoose');


const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String, // Store the file path or URL as a string
      required: true,
    },
    metaTitle: {
      type: String,
      required: true,
    },
    metaDiscription: {
      type: String,
      required: true,
    },
    altText: {
      type: String,
      required: true,
    },
    linkText : {  
      type: String,
      required: true,
    },
    url : {      
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // Automatically add `createdAt` and `updatedAt`
  }
);

const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;

