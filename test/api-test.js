var should = require('chai').should(),
    expect = require('chai').expect,
    supertest = require('supertest'),
    api = supertest('http://localhost:3000');

describe('api test', function () {
    it('should return a 200 response', function (done) {
        api.get('/')
            .set('Accept', 'application/json')
            .expect(200, done);
    })

    it('should return a 404 response', function (done) {
        api.get('/insert')
            .set('Accept', 'application/json')
            .expect(404, done);
    })
});