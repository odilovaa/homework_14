const {Router} = require("express");
const { login, register, update_1, update_2, find } = require("../controller/register.controller");

const router = Router();

router.post("/register", register);
router.post("/login", login);
router.put("/update_1", update_1);
router.put("/update_2", update_2);
router.get("/find", find);


module.exports = router;