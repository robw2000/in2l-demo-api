import request from 'supertest';
import app from '../src/server';

describe('Get Profiles', () => {
  afterAll(done => {
    app.close(done);
  });

  it('should get an array of profiles', async () => {
    const res = await request(app).get('/api/profiles');
    // console.log(res);
    expect(res.status).toEqual(200);
  });
});
