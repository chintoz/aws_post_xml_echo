var express = require('express');
var router = express.Router();

/* POST operation */
router.post("/xml", function(req, res){
    res.setHeader('Content-Type', 'text/xml');
    res.end(req.body);
});

module.exports = router;