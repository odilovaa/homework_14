const About_me = require("../model/About_me.model");

const create = async (req, res) =>
{
    const { full_name, birth_date, city, bio, read_id, reading_id, will_read_id, photo, books_count} = req.body;

    const user = await About_me.findOne({where: {user_id: c_id}});
    if(user)
        return res.json({message: "You already created about_me page!"});

    const newuser = await About_me.create({full_name, birth_date, city, bio, read_id, reading_id, will_read_id, photo, books_count});

    await newuser.save()

    res.json({message: "Successfully created!"});
};

const findOne = async (req, res) =>
{
    const user = await About_me.findOne({where: {user_id: c_id}});
    res.json({message: user});
};


const getParamsByPk = async (req, res) =>
{
    
};


module.exports = { 
    create, findOne, getParamsByPk
}