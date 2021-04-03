module.exports = app =>{
    const reviews = require("../controllers/reviews.controlller.js");
    var router = require("express").Router();

    router.post("/", reviews.create);

    router.get("/:id", reviews.findOne);

    app.use('/api/reviews', router);
}