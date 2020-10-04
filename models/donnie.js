module.exports = (sequelize, Sequelize) => {
    const donnie = sequelize.define("donnie", {
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      requirements: {
        type: Sequelize.STRING
      }
    });
  
    return donnie;
  };