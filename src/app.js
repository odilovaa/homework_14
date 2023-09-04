const express = require("express");
const fileUpload = require("express-fileupload");

const config = require("../config");
const sequelize = require("../database");
const routes = require("./router");
require("./model/associations.model");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(fileUpload())

app.use("/api", routes);

const bootstrap = async () => {
  await sequelize.authenticate({
    logging: false,
  });

  await sequelize.sync({
    logging: false,
    alter: true,
  });

  app.listen(config.port, () => {
    console.log(`Server listening on port: //${config.port}//`);
  });
};

bootstrap();