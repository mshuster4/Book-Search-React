const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true, unique: true },
  author: { type: Array, required: true },
  thumbnail: { type: String, required: true },
  plot: { type: String, required: true },
  href: { type: String, required: true }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;