# NomeDoProjeto - PWA (Bootcamp II)

## Links
- PWA (GitHub Pages): https://<org>.github.io/<repo>
- CI: https://github.com/<org>/<repo>/actions
- Vídeo: link para vídeo/GIF

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
