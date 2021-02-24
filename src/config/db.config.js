const sequelize = require('../models').sequelize;
const User = require('../models').user;
const Coupon = require('../models').coupon;
const User_coupon = require('../models').user_coupon;

const models = {
  User,
  Coupon,
  User_coupon
};

const db = {
  models,
  sequelize
};

module.exports = db;