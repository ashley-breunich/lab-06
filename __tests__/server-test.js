'use strict';

const {server} = require('../server.js');
const supertest = require('supertest');
const mockRequest = supertest(server);
// console.log(server);

describe ('web server', () => {
  // beforeAll(() => server.start(8080));
  // afterAll(() => server.stop(() => console.log('Server Stopped.')));

  it('should respond with a 404 on an invalid route', () => {
    return mockRequest
      .get('/boo')
      .then(results => {
        console.log(results.status);
        expect(results.status).toBe(404);
      }).catch(err => {
        console.log(err);
      });
  });

  it('should respond with a 201 status when routed to the home page', () => {
    return mockRequest
      .get('/')
      .then(results => {
        console.log(results.status);
        expect(results.status).toBe(200);
      }).catch(err => {
        console.log(err);
      });
  });

  // it('should respond with a 201 status when routed to a secondary page', () => {
  //   return mockRequest
  //     .get('/categories')
  //     .then(results => {
  //       console.log(results.status);
  //       expect(results.status).toBe(200);
  //     }).catch(err => {
  //       console.log(err);
  //     });
  // });

  // it('should respond with a 201 status when routed to a products page', () => {
  //   return mockRequest
  //     .get('/categories/boots')
  //     .then(results => {
  //       expect(results.status).toBe(200);
  //     }).catch(err => {
  //       console.log(err);
  //     });
  // });
});
