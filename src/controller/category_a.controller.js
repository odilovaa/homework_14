const Category_a = require("../model/Category_a.model");
const Author = require("../model/Authors.model");
let {c_id} = require("./register.controller");
const { Op } = require("sequelize");

const create = async (req, res) =>
{
    const {title} = req.body;

    const categoty = await Category_a.findOne({where: {title}});
    if(categoty)
        return res.json({message: "This category already exits!"});

    const newcategory = await Category_a.create({title});

    await newcategory.save()

    res.json({message: "Successfully created!", newcategory});
};


const getbyid = async (req, res) =>
{
    const {id} = req.params;
    const category = await Category_a.findAll({
        include: Author,
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

    const data = await Author.findAll({
        where: filter.where,
    });

    res.json({data});
};

module.exports = 
{
    create, getbyid, update, search
};