const express = require("express");

const routes = express.Router();
const blogTwoController = require("../controller/blogTwoController");

routes.get("/get_blog", blogTwoController.getBlogTwo);
routes.post("/create_blog", blogTwoController.createBlogTwo);
routes.put("/edit_blog/:id", blogTwoController.editBlogTwo);
routes.delete("/delete_blog/:id", blogTwoController.deleteBlogTwo);
module.exports = routes;





