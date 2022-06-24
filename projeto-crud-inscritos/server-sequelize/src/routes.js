const express = require('express');
const InscricaoController = require('./controller/InscricaoController');

const routes = express.Router();

routes.get("/",(req, res) => {
    res.send("Hello World!")
})

routes.get("/index/getdata", InscricaoController.index)
routes.get("/index/getdata/:id", InscricaoController.findByid)
routes.post("/index/postdata", InscricaoController.register)
routes.delete("/index/delete/:id", InscricaoController.delete)
routes.put("/index/edit/", InscricaoController.edit)

module.exports  = routes