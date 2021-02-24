const db = require('../config/db.config');
const User = require('./user.model').user;
const Coupon = require('./coupon.model').coupon;

module.exports = (sequelizeModels, Sequelize) => {
    const user_coupon = sequelizeModels.define(
        'user_coupon', {}, { tableName: 'user_coupon', timestamps: false }
    );

    return user_coupon;
};