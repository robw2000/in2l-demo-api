import request from 'supertest';
import app from '../src/server';
import dotenv from 'dotenv';

describe('Authentication', () => {
  afterAll(done => {
    app.close(done);
  });

  it('should fail without any inputs', async () => {
    const res = await request(app)
      .post('/api/auth/login')
    expect(res.status).toEqual(403);
  });

  it('should fail with bad inputs', async () => {
    const res = await request(app)
      .post('/api/auth/login')
      .send({
        userId: 'agent86',
        password: 'control'
      })
    expect(res.status).toEqual(403);
  });

  it('should succeed with proper credentials', async () => {
    dotenv.config();
    const res = await request(app)
      .post('/api/auth/login')
      .send({
        userId: 'agent86',
        password: process.env.SAMPLE_PASSWORD
      })
    expect(res.status).toEqual(200);
  });
});
