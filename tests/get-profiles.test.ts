import request from 'supertest';
import app from '../src/server';

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
    const res = await request(app)
      .get('/api/profiles')
      .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJ1c2VyOTkiLCJyb2xlcyI6WyJhZG1pbiIsInVzZXIiXSwiaWF0IjoxNjIxMjMyNDE0fQ.RZbuahhKXZgHo1EF-c5LOwt2gwHxSNu4WCVoZDEC2Zs');
    expect(res.status).toEqual(200);
  });
});
