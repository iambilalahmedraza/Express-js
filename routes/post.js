import express from "express";
import {
  createPost,
  deletePost,
  editPost,
  getPosts,
  getSinglePost,
} from "../controllers/postController.js";
const router = express.Router();

//Get All Posts
router.get("/", getPosts);
// Get Single Post
router.get("/:id", getSinglePost);

//create new post
router.post("/", createPost);
//Edit Post
router.patch("/:id", editPost);
//Delete Post
router.delete("/:id", deletePost);
export default router;
