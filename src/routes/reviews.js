import express from "express";
import databaseObj from "../db/tables/index.js";
import s from "sequelize";

const { Reviews } = databaseObj;

const reviewsRouter = express.Router();

reviewsRouter.get("/", async (req, res, next) => {
  try {
    const data = await Reviews.findAll();
    res.send(data);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

reviewsRouter.post("/", async (req, res, next) => {
  try {
  } catch (error) {
    console.log(error);
    next(error);
  }
});

reviewsRouter.get("/:id", async (req, res, next) => {
  try {
  } catch (error) {
    console.log(error);
    next(error);
  }
});

reviewsRouter.put("/:id", async (req, res, next) => {
  try {
  } catch (error) {
    console.log(error);
    next(error);
  }
});

reviewsRouter.delete("/:id", async (req, res, next) => {
  try {
  } catch (error) {
    console.log(error);
    next(error);
  }
});

export default reviewsRouter;
