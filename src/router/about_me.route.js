const {Router} = require("express");
const { create, findOne, getParamsByPk } = require("../controller/about_me.controller");

const router = Router();

router.post("/about_me", create);
router.get("/about_me", findOne);
router.get("/about_me/books/:id", getParamsByPk);

module.exports = router;