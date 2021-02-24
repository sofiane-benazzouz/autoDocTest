// Express router
const express = require('express');
const router = express.Router();

// Controller declaration
const CouponController = require('../controllers/coupon.controller.js');

/**
 * @swagger
 * /coupons:
 *   get:
 *     description: Returns coupons
 *     produces:
 *      - application/json
 *     responses:
 *       200:
 *         description: coupons
 */ 
router.get('/coupons', CouponController.getCoupons);

/**
 * @swagger
 * /couponByCodeCoupon:
 *   get:
 *     description: Returns coupon
 *     produces:
 *      - application/json
 *     parameters:
 *       - in: query
 *         name : code_coupon
 *         description: get coupon by Code coupon.
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: coupon
 */
router.get('/couponByCodeCoupon', CouponController.getCouponByCodeCoupon);

// A REVOIR
/**
 * @swagger
 *
 * /couponToUser:
 *   post:
 *     description: add coupon to user (NE FONCTIONNE PAS POUR LE MOMENT)
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: userId
 *         description: id user to add for a coupon.
 *         in: formData
 *         required: true
 *         type: number
 *       - name: couponId
 *         description: add coupon id.
 *         in: formData
 *         required: true
 *         type: number
 *     responses:
 *       200:
 *         description: add coupon to user has been established successfully
 */
// router.post('/couponToUser', CouponController.couponToUser);

// Export routes
module.exports = router;