const CONFIG = require('../src/config/config');
const expect = require('chai').expect;
const supertest = require('supertest');

api = supertest('http://localhost:3000');


describe('Tests concernant l\'utilisateur', function () {

    describe('TEST register user', function () {
        it(`${CONFIG.uri_prefix_main}/register`, function () {
            const bcrypt = require('bcryptjs');
            const salt = bcrypt.genSaltSync(5);
            const testMdp = bcrypt.hashSync('test', salt);

            const userToCreate = {
                userId: 4,
                nom: 'test',
                prenom: 'test',
                email: 'test@test.fr',
                pwd: testMdp
            };

            api.post(`${CONFIG.uri_prefix_main}/register`)
                .send(userToCreate)
                .end(function (err, res) {
                    expect(res.status).to.equal(200);
                });
        });
    });


    describe('TEST login user', function () {
        it(`${CONFIG.uri_prefix_main}/login`, function () {
            const userToLogin = {
                email: 'sullivan.delaby@epsi.fr',
                pwd: 'sullivan'
            };

            api.post(`${CONFIG.uri_prefix_main}/login`)
                .send(userToLogin)
                .end(function (err, res) {
                    expect(res.status).to.equal(200);
                });
        });
    });

});