const Author = require("../model/Authors.model");
const Book = require("../model/Books.model");

const create = async (req, res) =>
{
    const { title, pages, year, price, country, author_id, description, category_id, photo} = req.body;

    const book = await Book.findOne({where: {title}});
    if(book)
        return res.json({message: "This author already exits!"});

    const newbook = await Book.create({title, pages, year, price, country, author_id, description, category_id, photo});

    await newbook.save()

    res.json({message: "Successfully added!"});
};

const getbyid = async (req, res) =>
{
    const book = await Book.findAll({
        include: Author,
        attribute: {
            exclude: ["id", "pages", "year", "price", "country", "author_id", "description", "category_id"]
        }
    });

    res.json({book});
};


module.exports = 
{
    create, getbyid
};