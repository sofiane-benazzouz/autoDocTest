const db = require('../config/db.config');

//Find all coupons
module.exports.findCoupons = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const result = await db.models.Coupon.findAll();
            resolve(result);
        } catch (err) {
            reject(err);
        }
    });
};

module.exports.findCoupon = (code_coupon) => {
    return new Promise(async (resolve, reject) => {
        try {
            const result = await db.models.Coupon.findOne({
                where: {
                    code_coupon: code_coupon
                }
            });
            resolve(result);
        } catch (err) {
            reject(err);
        }
    });
};

// A REVOIR
// module.exports.couponToUser = (userId, code_coupon) => {
//     return new Promise(async (resolve, reject) => {
//         try {
//             const result = await db.models.User_coupon.create({
//                 USER_id: userId,
//                 COUPON_id: code_coupon
//             });
//             resolve(result);
//         } catch (err) {
//             reject(err);
//         }
//     });
// };