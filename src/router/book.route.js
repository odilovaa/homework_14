const {Router} = require("express");
const isAdmin = require("../middleware/login");
const { create, getbyid } = require("../controller/book.contoller");

const router = Router();

router.post("/author/:id", isAdmin, create);
router.get("/author/:id", getbyid);

module.exports = router;