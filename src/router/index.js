const registerRouter = require("./register.route");
const about_meRouter = require("./about_me.route");
const category_aRouter = require("./category_a.route");
const authorRouter = require("./author.route");
const category_bRouter = require("./category_b.route");
const bookRouter = require("./book.route");

module.exports = [registerRouter, about_meRouter, category_aRouter, authorRouter, bookRouter, category_bRouter];