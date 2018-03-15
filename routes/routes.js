var express = require('express');
var router = express.Router();

/* POST operation */
router.post("/xml", function(req, res){
    res.setHeader('Content-Type', 'text/xml');
    console.log(req.rawBody);
    res.end(req.rawBody);
});

module.exports = router;