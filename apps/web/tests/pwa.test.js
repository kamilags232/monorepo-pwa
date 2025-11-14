// tests/pwa.test.js
import { test, expect } from '@playwright/test';

const BASE_URL = process.env.E2E_BASE_URL || 'http://localhost:4173';

test('PWA carrega e consome API', async ({ page }) => {
  console.log(`➡️ Testando aplicação em ${BASE_URL}`);
  await page.goto(BASE_URL, { waitUntil: 'networkidle' });

  // Verifica se a página carregou com um título válido
  const title = await page.title();
  expect(title).not.toBe('');

  // Espera que a página mostre alguma indicação de sucesso na API
  const bodyText = await page.textContent('body');

  if (bodyText.includes('Erro ao conectar à API')) {
    throw new Error('❌ A aplicação não conseguiu se comunicar com a API.');
  }

  expect(
    bodyText.includes('Hello Bootcamp!') || bodyText.includes('API está respondendo')
  ).toBeTruthy();
});
