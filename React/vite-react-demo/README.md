# Projektets namn

## Beskrivning
Detta program är en enkel React-applikation som demonstrerar grunderna i komponentarkitektur och dokumentation, skapad med Vite.

## Installation
1. Klona repot:
I din terminal: git clone <git-url>

2. Navigera till projektmappen:
cd project-name

3. npm install

4. npm run dev <!-- ofta ändrar man om i sin package json så att det står npm start istället för run dev, vad det betyder specificeras i package.json -->

## Använda appen
Öppna en webbläsare och gå till: [Vilken url? : ](http://localhost:5173/) <!-- eller annat -->

## Funktioner/Komponenter
- Header: Header-element som visar upp en text
- Greetings: h1-element med texten 'Hello World'.
- Footer: Footer-element som visar upp en text

## Bidra
Skicka en pull request om du vill förbättra projektet.


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
