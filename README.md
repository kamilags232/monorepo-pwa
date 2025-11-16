# Focus-Blocker - PWA (Bootcamp II)

## Arquitetura
Monorepo contendo:
- `apps/web` — PWA (Vite + React)
- `apps/api` — Backend (Node/Express)

## Como rodar localmente (requisitos)
- Docker & Docker Compose
- Node 20 (para rodar sem Docker)

### Rodando com Docker Compose
```bash
docker-compose up --build
# web: http://localhost:8080
# api: http://localhost:3000

 Bootcamp PWA – API + Frontend + Testes + Docker
 Descrição

Este projeto é uma aplicação completa composta por:

API Node/Express → responde em /api/hello

Frontend React + Vite → PWA (instalável)

Testes

Jest (API)

Playwright (Web)

Docker Compose

Monorepo organizado (apps/api + apps/web)

 Como rodar o projeto
 1. Rodar API
cd apps/api
npm install
npm start


API rodando em:

http://localhost:3000/api/hello

 2. Rodar Web (PWA)
cd apps/web
npm install
npm run dev


Rodando em:

http://localhost:5173

 3. Rodar com Docker
docker-compose up --build


Acessar:

http://localhost:8080   (WEB)
http://localhost:3000   (API)

 Testes
API (Jest)
cd apps/api
npm test

Web (Playwright)
cd apps/web
npm run build
npm run preview
E2E_BASE_URL=http://localhost:4173 npx playwright test

Funcionalidades da PWA

Instalável

Offline básico

Manifest configurado

Service worker ativo

 Prints (adicionar)

Tela da PWA

Tela da API

Execução dos testes

Instalação da PWA
