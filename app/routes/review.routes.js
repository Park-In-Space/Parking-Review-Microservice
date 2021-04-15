module.exports = app =>{
    const reviews = require("../controllers/reviews.controlller.js");
    var router = require("express").Router();

    router.post("/", reviews.create);

    router.get("/:id", reviews.findOne);

    router.put("/:id", reviews.update);

    router.delete("/:id", reviews.delete)

    router.delete("/", reviews.deleteAll)

    router.get("/", reviews.getAll);

    app.use('/api/reviews', router);
}