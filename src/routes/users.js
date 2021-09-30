import express from "express";
import databaseObj from "../db/tables/index.js";
import s from "sequelize";
const { Op } = s;

const { Users } = databaseObj;

const usersRouter = express.Router();

usersRouter.get("/", async (req, res, next) => {
  try {
    const data = await Users.findAll();

    res.send(data);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

usersRouter.post("/", async (req, res, next) => {
  try {
    const data = await Users.create(req.body);
    res.send(data);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

usersRouter.get("/:id", async (req, res, next) => {
  try {
    const data = await Users.findByPk(req.params.id);
    res.send(data);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

usersRouter.put("/:id", async (req, res, next) => {
  try {
    const data = await Users.update(req.body, {
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

usersRouter.delete("/:id", async (req, res, next) => {
  try {
    const rows = await Users.destroy({ where: { id: req.params.id } });
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

export default usersRouter;
