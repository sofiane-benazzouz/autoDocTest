const couponBuilder = require('../builders/coupon.builder');
const userBuilder = require('../builders/user.builder');

module.exports.getCoupons = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const coupons = await couponBuilder.findCoupons();
            resolve(coupons);
        } catch (err) {
            reject({
                status: 500,
                message: err
            });
        }
    });
};

module.exports.getCouponByCodeCoupon = (code_coupon) => {
    return new Promise(async (resolve, reject) => {
        try {
            const coupon = await couponBuilder.findCoupon(code_coupon);
            resolve(coupon);
        } catch (err) {
            reject({
                status: 500,
                message: err
            });
        }
    });
};

// A REVOIR
// module.exports.couponToUser = (body) => {
//     return new Promise(async (resolve, reject) => {
//         try {
//             const {
//                 userId,
//                 code_coupon
//             } = body;
            
//             console.log(userId, code_coupon, "reception du client");

//             if (code_coupon !== 0) {
//                 const coupon = await couponBuilder.findCoupon(code_coupon);
//                 if (coupon === null) {
//                     return resolve({
//                         status: 403
//                     });
//                 }

//                 if (userId !== 0) {
//                     const user = await userBuilder.findUser(userId);
//                     // console.log(user, "verif user");
//                     if (user === null) {
//                         // console.log(user, "si user est null ");
//                         const test = await userBuilder.createUser(userId);
//                         console.log(test.userId, "PHONE_ID après verif")
                        
//                         const assignCoupon = await couponBuilder.couponToUser(test.userId, code_coupon);
//                         resolve(assignCoupon);
    
//                     }
//                 }
//             }

//         } catch (err) {
//             reject({
//                 status: 500,
//                 message: err
//             });
//         }
//     });
// };