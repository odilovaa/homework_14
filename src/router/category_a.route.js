const {Router} = require("express");
const { create, search, getbyid } = require("../controller/category_a.controller");
const isAdmin = require("../middleware/login");

const router = Router();

router.post("/category_a/:id", isAdmin, create);
router.post("/category_a/search", search);
router.get("/category_a/:id", getbyid);

module.exports = router;