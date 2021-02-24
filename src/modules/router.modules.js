const auth = require('../routes/auth.route');
const coupon = require('../routes/coupon.route');
const CONFIG = require('../config/config');

// GESTION DES ROUTES PRINCIPALES
module.exports = app => {

    //AUTHENTIFICATION
    app.use(CONFIG.uri_prefix_main, auth);

    // COUPON
    app.use(CONFIG.uri_prefix_main, coupon);

};