'use strict';
module.exports = function(sequelize, DataTypes) {
  var SupplierItem = sequelize.define('SupplierItem', {
    SupplierId: DataTypes.INTEGER,
    ItemId: DataTypes.INTEGER,
    price: DataTypes.FLOAT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  SupplierItem.associate=function(models){
    SupplierItem.belongsTo(models.Item);
    SupplierItem.belongsTo(models.Supplier)
  }
  return SupplierItem;
};
