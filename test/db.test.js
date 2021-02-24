const db = require('../src/config/db.config');


describe('Check Connection to database', function () {
    it('connection database', done => {
        db.sequelize.authenticate().then(function (errors, result) {
            if (errors) {
                done(errors);
                return;
            }
            done();
        });
    });
});