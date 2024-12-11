import express from "express";
import logger from "./middleWare/logger.js";

import path, { dirname } from "path";
import router from "./routes/post.js";
const app = express();
import dotenv from "dotenv";
import errorHandler from "./middleWare/error.js";
import notFOund from "./middleWare/notFound.js";
import { fileURLToPath } from "url";
dotenv.config();
const port = process.env.PORT;

const __dirname = dirname(fileURLToPath(import.meta.url));

//bodyParser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//logger MiddleWare
app.use(logger);

app.use(express.static(path.join(__dirname, "public")));
app.use("/api/posts", router);

//Not Found Error

app.use(notFOund);

//Error Handler

app.use(errorHandler);
app.listen(port, () => console.log(`server is running on ${port}`));
