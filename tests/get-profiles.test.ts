import request from 'supertest';
import app from '../src/server';
import dotenv from 'dotenv';

describe('Get Profiles', () => {
  afterAll(done => {
    app.close(done);
  });

  it('should fail without any authentication', async () => {
    const res = await request(app)
      .get('/api/profiles')
    expect(res.status).toEqual(401);
  });

  it('should fail with incorrect authentication', async () => {
    const res = await request(app)
      .get('/api/profiles')
      .set('Authorization', 'Bearer evil_token');
    expect(res.status).toEqual(403);
  });

  it('should get an array of profiles with proper authentication', async () => {
    dotenv.config();
    const res = await request(app)
      .get('/api/profiles')
      .set('Authorization', process.env.SAMPLE_JWT);
    expect(res.status).toEqual(200);
  });
});
