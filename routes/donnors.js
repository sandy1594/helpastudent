
    const donnors = require("../controllers/donnors.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", donnors.create);
  
    // Retrieve all donnors
    router.get("/", donnors.findAll);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", donnors.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", donnors.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", donnors.delete);
  
    // Create a new Tutorial
    router.delete("/", donnors.deleteAll);
  
    app.use('/api/donnors', router);
    module.exports = router;