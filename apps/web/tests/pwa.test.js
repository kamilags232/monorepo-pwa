import { test, expect } from '@playwright/test';

test('API responde JSON correto', async ({ request }) => {
  const res = await request.get('http://localhost:3000/api/hello');

  expect(res.ok()).toBeTruthy();

  const data = await res.json();
  console.log('Resposta da API:', data);

  expect(data.message).toBe('Hello Bootcamp!');
});

