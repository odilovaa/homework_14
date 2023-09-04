const {Router} = require("express");
const { create, search, getbyid } = require("../controller/category_b.controller");
const isAdmin = require("../middleware/login");

const router = Router();

router.post("/category_b/:id", isAdmin, create);
router.post("/category_b/search", search);
router.get("/category_b/:id", getbyid);

module.exports = router;