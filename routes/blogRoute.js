const express = require("express");
const routes = express.Router();
const blogController = require("../controller/blogController");

routes.get("/", (req, res) => { 
    res.send("Welcome to Blog API");
});
routes.post("/login",blogController.adminLoginController)
routes.get("/get_blog", blogController.getBlog);
routes.post("/create_blog", blogController.createBlog);
routes.put("/edit_blog/:id", blogController.editBlog);
routes.delete("/delete_blog/:id", blogController.deleteBlog);
module.exports = routes;

