import cors from "cors";
import express from "express";

import { errorHandler } from "./middlewares/error.middleware.js";
import { productsRoute } from "./routes/index.js";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/v1/products", productsRoute);

app.use(errorHandler);

export default app;
