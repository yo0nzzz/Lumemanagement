# Lumemanagement

Base simples em **React + Vite** com React Router.

## Como rodar

```bash
npm install
npm run dev
```

Abra o endereço que aparecer no terminal (normalmente http://localhost:5173).

## Scripts

| Comando           | O que faz                     |
| ----------------- | ----------------------------- |
| `npm run dev`     | Servidor de desenvolvimento   |
| `npm run build`   | Gera a versão de produção     |
| `npm run preview` | Visualiza o build localmente  |

## Estrutura

```
src/
├── components/
│   ├── Layout.jsx     # Navbar + conteúdo + Footer
│   ├── Navbar.jsx
│   └── Footer.jsx
├── pages/
│   ├── Home.jsx
│   ├── Login.jsx
│   ├── Cadastro.jsx
│   └── NotFound.jsx
├── App.jsx            # Rotas
├── main.jsx
└── index.css          # Variáveis, reset e botões
```

## Paleta e fonte

- Fundo: `#f6f5f0`
- Texto/detalhes: `#141414`
- Fonte: Montserrat (Google Fonts, carregada no `index.html`)

As cores ficam em variáveis CSS no topo de `src/index.css`.

## Próximos passos

Os formulários de **Login** e **Cadastro** já validam os campos, mas ainda não
enviam nada para um servidor. Procure o comentário `TODO` em cada arquivo para
conectar a sua API.
