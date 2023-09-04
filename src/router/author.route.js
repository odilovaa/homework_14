const {Router} = require("express");
const { create, getbyid } = require("../controller/author.controller");
const isAdmin = require("../middleware/login");

const router = Router();

router.post("/author/:id", isAdmin, create);
router.get("/author/:id", getbyid);

module.exports = router;