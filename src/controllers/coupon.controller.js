const couponService = require('../services/coupon.service');

exports.getCoupons = async (req, res) => {
    try {
        let data = await couponService.getCoupons();
        return res.status(200).json(data);
    } catch (err) {
        return res.status(err).send(err.message);
    }
};

exports.getCouponByCodeCoupon = async (req, res) => {
    try {
        let data = await couponService.getCouponByCodeCoupon(req.query.code_coupon);
        return res.status(200).json(data);
    } catch (err) {
        return res.status(err).send(err.message);
    }
};


// A REVOIR
// exports.couponToUser = async (req, res) => {
//     try {
//         let data = await couponService.couponToUser(req.body);
//         return res.status(200).json(data);
//     } catch (err) {
//         return res.status(err).send(err.message);
//     }
// };