module.exports = (sequelize, Sequelize) => {
    const donor = sequelize.define("donor", {
      name: {
        type: Sequelize.STRING
      },
      donated: {
        type: Sequelize.STRING
      }
     
    });
  
    return donnie;
  };