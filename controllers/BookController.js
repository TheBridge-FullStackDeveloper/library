const { Book } = require("../models/index");

const BookController = {
  async insert(req, res) {
    // Book.create(req.body)
    //   .then((book) => {
    //     book.addGenre(req.body.GenreId);
    //     res.send(book);
    //   })
    //   .catch((err) => console.error(err));
    try {
      const book = await Book.create(req.body);
      book.addGenre(req.body.GenreId);
      res
        .status(201)
        .send({ msg: `Book ${book.name} created successfully`, book });
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  },
};

module.exports = BookController;
