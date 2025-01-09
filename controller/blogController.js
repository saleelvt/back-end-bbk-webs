
const Admin= require("../model/adminModel");
const blogDB = require("../model/blogModel");
const bcrypt = require('bcrypt'); 

module.exports = {
  adminLoginController:async (req, res)=>{
      
    try { 
      const { email, password } = req.body;
      const admin = await Admin.findOne({ email });
      if (!admin) {
        return res.status(404).json({ message: "Admin not found" });
      } 
      const isMatch = await bcrypt.compare(password, admin.password);
      if (!isMatch) {
        return res.status(400).json({ message: "Invalid password" });
      } 
      res.status(200).json({success:true, message: "Admin Login Successfull"});
    } catch (error) {
      console.error("Error while login ", error);
      res.status(500).json({ message: "Something went  wronge while login" });
    
  }}
,


  getBlog: async (req, res) => {
    try {
      const blogs = await blogDB.find();

      if (blogs.length === 0) {
        return res.status(404).json({ message: "blogs is Empty" });
      }

      if (!blogs) {
        return res.status(404).json({ message: "cant find any blogs" });
      }
      res.status(200).json({ blogPosts: blogs });

    } catch (error) {
      console.error(error, "Something happend while geting the blog");

      res.status(500).json({
        message: "Somthing wrong with geting blog",
      });
    }
  },

  createBlog: async (req, res) => {
    try {

      console.log("this is creating the blogs and req.body is", req.body);
      const { title, date, category, imageUrl, description, postLink, categoryLink } = req.body;
      const isExistingTitle = await blogDB.findOne({ title });
      if (isExistingTitle) {
        return res.status(404).json({ message: "Blog is allready exist" });
      }

    
      const blogData = new blogDB({
        title,
        date,
        category,
        imageFile,
        description,
        postLink,
        categoryLink
      });

      await blogData.save();

      res.status(200).json({
        message: "Blog created successfully",
      });
    } catch (error) {
      console.error(error);

      res.status(500).json({
        message: "Somthing wrong with creating blog",
      });
    }
  },

  editBlog: async (req, res) => {
    try {
      const { title, date, category, imageUrl, description, postLink, categoryLink } = req.body;

      const id = req.params.id;

      const blog = await blogDB.findByIdAndUpdate(
        id,
        {
          title,
          date,
          category,
          imageFile,
          description,
          postLink,
          categoryLink
        },
        { new: true }
      );

      if (!blog) {
        res.status(404).json({
          message: "Blog not found",
        });
      }

      res.status(200).json({
        message: "Successfully Edited Blog",
      });
    } catch (error) {
      console.error(error);

      res.status(500).json({
        message: "Somthing wrong with editing blog",
      });
    }
  },

  deleteBlog: async (req, res) => {
    try {
      const id = req.params.id;

      const deleteBlog = await blogDB.findByIdAndDelete(id);

      if (!deleteBlog) {
        res.status(404).json({ message: "Cant find blog to delete" });
      }

      res.status(200).json({
        message: "Successfully deleted blog",
      });
    } catch (error) {
      console.error("Some Error while deleting the blog", error);
    }
  },
};
