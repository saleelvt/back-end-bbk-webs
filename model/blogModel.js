const mongoose = require('mongoose');


const blogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, required: true },
    linkText: [{ type: String }], // Array of strings
    url: [{ type: String }],      // Array of strings
    description: { type: String, required: true },
    imageUrl: { type: String, required: true },
    metaTitle: { type: String, required: true },
    metaDiscription: { type: String, required: true },
    altText: { type: String, required: true },
  },
  {
    timestamps: true, // Automatically add `createdAt` and `updatedAt`
  }
);

const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;

