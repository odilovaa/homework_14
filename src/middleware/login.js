const User = require("../model/Users.model");
let {c_id} = require("../controller/register.controller")

const isAdmin = async (req, res, next) =>
{
    const {id} = req.params;

    const user = await User.findOne({where: {id}});
    if(user.status != 'Admin')
        return res.json({message: "Sorry only Admin can do it!"});

    next()    
};

module.exports = isAdmin;
