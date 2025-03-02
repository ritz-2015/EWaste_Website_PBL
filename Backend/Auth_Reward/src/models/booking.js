'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User,{
        foreignKey: 'userId',
        onDelete: 'CASCADE'
      })
    }
  }
  Booking.init({
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    factoryId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM,
      values: ['inProcess', 'cancelled', 'booked'],
      defaultValue: 'inProcess',
      allowNull: false
    },
    wasteName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    location:{
      type: DataTypes.STRING,
      allowNull: false
    },
    phoneNo:{
      type: DataTypes.STRING,
      allowNull:false
    },
    modelName: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'Booking',
  });
  return Booking;
};