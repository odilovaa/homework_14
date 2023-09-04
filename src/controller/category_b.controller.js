const Category_b = require("../model/Category_b.model");
const Book = require("../model/Books.model");
const { Op } = require("sequelize");

const create = async (req, res) =>
{
    const {title} = req.body;

    const categoty = await Category_b.findOne({where: {title}});
    if(categoty)
        return res.json({message: "This category already exits!"});

    const newcategory = await Category_b.create({title});

    await newcategory.save()

    res.json({message: "Successfully created!", newcategory});
};


const getbyid = async (req, res) =>
{
    const {id} = req.params;
    const category = await Category_b.findAll({
        include: Book,
        attribute: {
            exclude: ["id", "county", "bio"]
        }
    });

    res.json({category});
};


const update = async (req, res) =>
{

};


const search = async (req, res) =>
{
    const filter = {}

    const {search} = req.body;

    if(search)
    {
        filter.where = {
            [Op.or]: {
                first_name: {
                    [Op.iLike]: `%${search}%`
                },
                last_name: {
                    [Op.iLike]: `%${search}%`
                },
            }
        }
    }

    const data = await Book.findAll({
        where: filter.where,
    });

    res.json({data});
};

module.exports = 
{
    create, getbyid, update, search
};