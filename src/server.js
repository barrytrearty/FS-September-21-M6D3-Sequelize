import express from "express";
import cors from "cors";
import { connectDB } from "./db/index.js";
import sequelize from "./db/index.js";
import reviewsRouter from "./routes/reviews.js";
import productsRouter from "./routes/products.js";

const server = express();

const { PORT = 5000 } = process.env;

server.use(cors());

server.use(express.json());

server.use("/products", productsRouter);
server.use("/reviews", reviewsRouter);

server.listen(PORT, async () => {
  await connectDB();
  console.log(`Server is running on port ${PORT}`);
});

server.on("error", (error) => {
  console.log("Server is stoppped ", error);
});
