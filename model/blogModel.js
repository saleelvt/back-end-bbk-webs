const mongoose = require('mongoose');


const blogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    headTitle: { type: String, required: true },
    slug: { type: String, required: true },
    brand: { type: String, required: true },
    description: { type: String, required: true },
    formattedDescription: { type: String, required: true },
    imageUrl: { type: String, required: true },
    metaTitle: { type: String, required: true },
    metaDescription: { type: String, required: true },
    altText: { type: String, required: true },
    canonical: { type: String, required: true },
  },
  {
    timestamps: true, // Automatically add `createdAt` and `updatedAt`
  }
);

const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;

