import express from "express";
import {config} from 'dotenv';
import rout from "./routes/index.js";
config();

const server = express();

server.set('port', process.env.PORT || 4551);

server.get('/',rout)

export default server;