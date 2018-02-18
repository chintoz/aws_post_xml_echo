var express = require('express');
var router = express.Router();

/* POST operation */
router.post("/xml", function(req, res){
    console.log("Se recibe la peticion: " + req.body);
    res.status(200).send("XML RESPUESTA");
});

module.exports = router;