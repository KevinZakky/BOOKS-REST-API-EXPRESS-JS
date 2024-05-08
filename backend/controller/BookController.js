import Books from "../models/BookModel.js";

export const getBooks = async (req, res) => {
  try {
    const response = await Books.findAll();
    res.status(200).json(response);
  } catch (err) {
    console.log(err.message);
  }
};

export const getBooksById = async (req, res) => {
  try {
    const response = await Books.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (err) {
    console.log(error.message);
  }
};

export const addBooks = async (req, res) => {
  try {
    await Books.create(req.body);
    res.status(201).json({ msg: "Book have been added" });
  } catch (err) {
    console.log(error.message);
  }
};

export const updateBooks = async (req, res) => {
  try {
    await Books.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Book have been updated" });
  } catch (err) {
    console.log(error.message);
  }
};

export const deleteBooks = async (req, res) => {
  try {
    await Books.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Book have been deleted" });
  } catch (err) {
    console.log(error.message);
  }
};
