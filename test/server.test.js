import supertest from 'supertest';
import server from '../src/server';

describe('GET /', () => {
  it('should have status 200', () => {
    supertest(server)
    .get('/')
    .expect(200)
    .end();
  });
});

