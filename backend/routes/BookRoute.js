import express from "express";
import {
  getBooks,
  getBooksById,
  addBooks,
  updateBooks,
  deleteBooks,
} from "../controller/BookController.js";

const router = express.Router();

// create endpoint
router.get("/books", getBooks);
router.get("/books/:id", getBooksById);
router.post("/books/", addBooks);
router.put("/books/:id", updateBooks);
router.delete("/books/:id", deleteBooks);

export default router;
