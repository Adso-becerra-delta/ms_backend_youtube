import { Router } from "express";

const ruotcanal = Router();

ruotcanal.get("/canal",(req, res) => {
    res.json({
        "msg":"hola mundo",
        "user":"jnssan",
        "application":"Youtube",
        "type":"Backend"
    });
});

ruotcanal.get('/',(req, res) => {
    res.json({
        "application":"Youtube"
    });
});


export default ruotcanal;