'use strict';

// jest.mock('../server.js');
const {server} = require('../server.js');
const supertest = require('supertest');
const mockRequest = supertest(server);
console.log(server);
describe ('web server', () => {
  
  it('should respond with a 404 on an invalid route', () => {
    return mockRequest
      .get('/boo')
      .then(results => {
        expect(results.status).toBe(404);
      }).catch(console.error);
  });

  it('should respond with a 201 status when routed to the home page', () => {
    return mockRequest
      .get('/')
      .then(results => {
        expect(results.status).toBe(200);
      }).catch(console.error);
  });

  it('should respond with a 201 status when routed to categories', () => {
    return mockRequest
      .get('/categories')
      .then(results => {
        expect(results.status).toBe(200);
      }).catch(console.error);
  });

  it('should respond with a 201 status when routed to a products page', () => {
    return mockRequest
      .get('/categories/boots')
      .then(results => {
        expect(results.status).toBe(200);
      }).catch(console.error);
  });
  
});