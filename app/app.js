import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import express from "express";
import ruta from "./routes/index.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(cors());
app.set("port", process.env.PORT);
app.use("/", ruta);




export default app;

