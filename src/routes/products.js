import express from "express";
import databaseObj from "../db/tables/index.js";
import s from "sequelize";

const { Products } = databaseObj;

const productsRouter = express.Router();

productsRouter.get("/", async (req, res, next) => {
  try {
    const data = await Products.findAll();
    res.send(data);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

productsRouter.post("/", async (req, res, next) => {
  try {
    const data = await Products.create(req.body);
    res.send(data);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

productsRouter.get("/:id", async (req, res, next) => {
  try {
    const data = await Products.findByPk(req.params.id);
    res.send(data);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

productsRouter.put("/:id", async (req, res, next) => {
  try {
    const data = await Products.update(req.body, {
      where: {
        id: req.params.id,
      },
      returning: true,
    });
    res.send(data[1][0]);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

productsRouter.delete("/:id", async (req, res, next) => {
  try {
    const rows = await Products.destroy({ where: { id: req.params.id } });
    if (rows > 0) {
      res.send("ok");
    } else {
      res.status(404).send("Not found");
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
});

export default productsRouter;
