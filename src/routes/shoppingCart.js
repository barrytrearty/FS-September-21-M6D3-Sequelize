import express from "express";
import databaseObj from "../db/tables/index.js";
import sequelize from "sequelize";

const { ItemsInShoppingCart, Products } = databaseObj;

const cartRouter = express.Router();

cartRouter.route("/:userId").get(async (req, res, next) => {
  try {
    const data = await ItemsInShoppingCart.findAll({
      where: { userId: req.params.userId },
      include: Products,
      attributes: [
        "productId",
        [sequelize.fn("count", sequelize.col("product.id")), "unitary_qty"],
      ],
      group: ["productId", "product.id"],
    });

    res.send(data);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

export default cartRouter;