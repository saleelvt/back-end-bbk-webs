const blogTwoDB = require("../model/blogTwoModel");

module.exports = {
  getBlogTwo : async (req, res) => {
    try {
      const blogs = await blogTwoDB.find();
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

  createBlogTwo : async (req, res) => {
    try {
      const { title, date, category, imageFile, description, link, categoryLink } = req.body;

      const isExistingTitle = await blogTwoDB.findOne({ title });

      if (isExistingTitle) {
        return res.status(404).json({ message: "Blog is allready exist" });
      }

      const blogData = new blogTwoDB({
        title,
        date,
        category,
        imageFile,
        description,
        link,
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

  editBlogTwo : async (req, res) => {
    try {
      const { title, date, category, imageUrl, description, link, categoryLink } = req.body;

      const id = req.params.id;

      const blog = await blogTwoDB.findByIdAndUpdate(
        id,
        {
          title,
          date,
          category,
          imageFile,
          description,
          link,
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
  

  deleteBlogTwo : async (req, res) => {
    try {
      const id = req.params.id;

      const deleteBlog = await blogTwoDB.findByIdAndDelete(id);
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
