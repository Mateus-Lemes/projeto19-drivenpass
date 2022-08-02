import express, { json } from "express";
import "express-async-errors";
import cors from "cors";
import "./config/setup.js";
var app = express();
app.use(json());
app.use(cors());
export default app;
