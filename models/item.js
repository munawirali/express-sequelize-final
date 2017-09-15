'use strict';
module.exports = function(sequelize, DataTypes) {
  var Item = sequelize.define('Item', {
    name: DataTypes.STRING,
    brand: DataTypes.STRING,
    codeitem:DataTypes.STRING,
    // codeitem: {
    //   DataTypes.STRING,
    //   validate:{
    //     isValid: (value, next)=>{
    //       Students.find({
    //           where: {email: value},
    //           attributes: ['id']
    //       })
    //       .done((error, Students)=>{
    //           if (error)
    //               return next(error);
    //           if (Students)
    //               return next('Email address already in use!');
    //           next();
    //       });
    //     }
    //   }
    // }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  Item.associate=function (models){
    Item.belongsToMany(models.Supplier,{through:'SupplierItem'});
  }
  return Item;
};
