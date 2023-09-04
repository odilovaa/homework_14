const User = require("./Users.model");
const About_me = require("./About_me.model");
const Author = require("./Authors.model");
const Book = require("./Books.model");
const Category_a = require("./Category_a.model");
const Category_b = require("./Category_b.model");

User.hasOne(About_me, {foreignKey: "user_id"});
About_me.belongsTo(User, {foreignKey: "user_id"});

Author.belongsTo(Category_a, {foreignKey: "category_id"});
Category_a.hasMany(Author, {foreignKey: "category_id"});

Book.belongsTo(Category_b, {foreignKey: "category_id"});
Category_b.hasMany(Book, {foreignKey: "category_id"});

About_me.belongsTo(Book, {foreignKey: "read_id"});
Book.hasMany(About_me, {foreignKey: "read_id"});

About_me.belongsTo(Book, {foreignKey: "reading_id"});
Book.hasMany(About_me, {foreignKey: "reading_id"});

About_me.belongsTo(Book, {foreignKey: "will_read_id"});
Book.hasMany(About_me, {foreignKey: "will_read_id"});