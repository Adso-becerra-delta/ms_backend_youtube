import { Router } from "express";
import ruotcanal from "./routes.canales.js";

const rout  = Router();

rout.use('/',ruotcanal);

export default rout;