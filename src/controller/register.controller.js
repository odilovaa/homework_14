const User = require("../model/Users.model");

const register = async (req, res) =>
{
    const { first_name, last_name, phone_number, email, password, photo} = req.body;

    const user = await User.findOne({where: {email, phone_number}});
    if(user)
        return res.json({message: "You already registered!"});

    const newuser = await User.create({first_name, last_name, phone_number, email, password, photo});

    await newuser.save()

    res.json({message: "Success", newuser});
};


const login = async (req, res) =>
{
    const { email, password } = req.body;

    console.log(email, password);

    const user = await User.findOne({where: {email, password}});

    if(!user)
        return res.json({message: "you need to register!"});

    res.json({message: "You are logged!"});
};


const update_1 = async (req, res) =>
{
    const { first_name, last_name, email, phone_number} = req.body;

    const user = await User.update({first_name: first_name, last_name: last_name, email: email, phone_number: phone_number},
        {where: {id: c_id}});

    res.json({message: "Successfully updated!"});
};


const update_2 = async (req, res) =>
{
    const {email, password, newpassword, confirmpassword} = req.body;

    const user = await User.findOne({where: {email, password}});

    if(!user)
        return res.json({message: "Email or password is invalid!"});

    if(newpassword != confirmpassword)
        return res.json({message: "Confirmation of new password is error!"});

    await User.update({password: newpassword},
        {where: {id: c_id}});

    res.json({message: "Successfully updated!"});
};

const find = async (req, res) => {
    const users = await User.findAll();
  
    res.json({users});
  };

module.exports = 
{
    register, login, update_1, update_2, find
};