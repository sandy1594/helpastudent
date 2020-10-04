
// Create and Save a new donnie

    exports.create = (req, res) => {
        // Validate request
        if (!req.body.title) {
          res.status(400).send({
            message: "Content can not be empty!"
          });
          return;
        }
      
        // Create a donnie
        const donnie = {
          title: req.body.title,
          description: req.body.description
          
        };
      
        // Save donnie in the database
        donnie.create(donnie)
          .then(data => {
            res.send(data);
          })
          .catch(err => {
            res.status(500).send({
              message:
                err.message || "Some error occurred while creating the donnie."
            });
          });
      };
  
};

// Retrieve all donnies from the database.

    exports.findAll = (req, res) => {
        const title = req.query.title;
        var condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;
      
        donnie.findAll({ where: condition })
          .then(data => {
            res.send(data);
          })
          .catch(err => {
            res.status(500).send({
              message:
                err.message || "Some error occurred while retrieving donnies."
            });
          });
      };
  


// Find a single donnie with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    donnie.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving donnie with id=" + id
        });
      });
    
  
};

// Update a donnie by the id in the request
    exports.update = (req, res) => {
  const id = req.params.id;

  donnie.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "donnie was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update donnie with id=${id}. Maybe donnie was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating donnie with id=" + id
      });
    });
};
  


// Delete a donnie with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    donnie.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "donnie was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete donnie with id=${id}. Maybe donnie was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete donnie with id=" + id
        });
      });
  
};

// Delete all donnies from the database.
exports.deleteAll = (req, res) => {
    donnie.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} donnies were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all donnies."
          });
        });
  
};

