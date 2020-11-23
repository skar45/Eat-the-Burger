var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", async function(req, res) {
    const value = await burger.show()
    const result = {burger: value}
    console.log(result)
    res.render('index', result)
});

router.post("/api/burgers", async function(req, res) {
    console.log(req.body.value)
    const result = await burger.insert(req.body.value);
    console.log(result)
    res.send({message: "inserted burger"})
});

router.put("/api/burgers/:id", async function(req, res) {
    const result = await burger.update(req.params.id);
    res.send({message: "db updated"})
});


// Export routes for server.js to use.
module.exports = router;
