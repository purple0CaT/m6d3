import express from "express";
import sequelize from "../../db/start.js";
import db from "../../db/modules/connect.js";
const { Product } = db;
//=
const products = express.Router();

products
  .route("/")
  .get(async (req, res, next) => {
    const data = await Product.findAll({
      include: Article,
      where: req.query.search
        ? { [Op.or]: [{ name: { [Op.iLike]: `%${req.params.search}%` } }] }
        : {},
    });
    res.send(data);
  })
  .post(async (req, res, next) => {});

export default products;
