
    const donnie = require("../controllers/donnie.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", donnie.create);
  
    // Retrieve all donnie
    router.get("/", donnie.findAll);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", donnie.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", donnie.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", donnie.delete);
  
    // Create a new Tutorial
    router.delete("/", donnie.deleteAll);
  
    app.use('/api/donnie', router);
    module.exports = router;