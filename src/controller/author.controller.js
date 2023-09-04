const Author = require("../model/Authors.model");
const Book = require("../model/Books.model");
let {c_id} = require("./register.controller");

const create = async (req, res) =>
{
    const { first_name, last_name, date_birth, date_death, country, photo, bio, category_id} = req.body;

    const author = await Author.findOne({where: {first_name, last_name}});
    if(author)
        return res.json({message: "This author already exits!"});

    const newauthor = await Author.create({first_name, last_name, date_birth, date_death, country, photo, bio, category_id});

    await newauthor.save()

    res.json({message: "Successfully added!"});
};

const getbyid = async (req, res) =>
{
    const {id} = req.params;
    const author = await Author.findOne({where: {id}},{
        include: Book,
        attribute: {
            exclude: [Book.id, Book.pages, Book.year, Book.price, Book.country, Book.author_id, Book.description, Book.category_id]
        }
    });

    res.json({author});
};


module.exports = 
{
    create, getbyid
};