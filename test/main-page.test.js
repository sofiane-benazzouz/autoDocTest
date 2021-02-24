const supertest = require('supertest');

api = supertest('http://localhost:3000');

describe('Page principale', function () {
    it('return to Swagger, statut 200', function () {
        api.get('/api-docs')
            .expect(200)
            .end();
    });
});
