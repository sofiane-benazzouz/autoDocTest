const CONFIG = require('../src/config/config');
const expect = require('chai').expect;
const supertest = require('supertest');

api = supertest('http://localhost:3000');


describe('Tests concernant les coupons', function () {

    describe('return get coupons', function () {
        it('Vérifie qu\'il y a chaque propriété pour le get /coupons', function () {
            api.get(`${CONFIG.uri_prefix_main}/coupons`)
                .expect(200)
                .end(function (err, res) {
                    expect(res.status).to.equal(200);
                    expect(res.body[0]).to.have.property('couponId');
                    expect(res.body[0]).to.have.property('discount');
                    expect(res.body[0]).to.have.property('description');
                    expect(res.body[0]).to.have.property('date_debut');
                    expect(res.body[0]).to.have.property('date_fin');
                });
        });
    });

});