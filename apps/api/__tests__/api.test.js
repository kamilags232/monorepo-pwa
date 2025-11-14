import request from 'supertest';
import app from '../index'; // para isso exporte express app em index.js

test('GET /api/hello', async () => {
  const res = await request(app).get('/api/hello');
  expect(res.status).toBe(200);
  expect(res.body.ok).toBe(true);
});
