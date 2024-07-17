import { Router } from "express";
import ruotcanal from "./canales.rout.js";

const rout  = Router();

rout.use('/',ruotcanal);

export default rout;