This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify


-----------------------------------------------------
Gerar logo [https://fontmeme.com/netflix-font/]
CSS [https://gist.github.com/omariosouto/19dafd5ca155c46b3dcb31df89cfba55]
Google Fonts [https://fonts.google.com/]
Vscode-styled-components [https://marketplace.visualstudio.com/items?itemName=jpoissonnier.vscode-styled-components]

-----------------------------------------------------
Plugin Live Share do VSCode: Programar juntos!!!!

Rodar projeto:
### npm start

Instalar styled-component
### npm install styled-components

-----------------------------------------------------
Aula 2

Instalar react-router-dom
### npm install react-router-dom

Instalar lib de slider (Carrosel)
### npm install react-slick
-----------------------------------------------------
Site [https://lyflix.vercel.app/]

Instalação Eslint
### npx eslint --init

No package.json, trocar versão de dependência Eslint para: ^6.6.0
E rodar
### npm install

Instalar e habilitar o plugin do VScode ESLint (Ctrl+Shift+P -> Enable ESLint)

-----------------------------------------------------

Instalação prop-types: https://www.npmjs.com/package/prop-types
### npm install prop-types

Instalação back-end
### npm install json-server

Adicionar ao script do package.json
"server": "json-server --watch db.json",

Rodar server:
### npm run server

-------------------------------------------------------

Rodar dois ou mais serviços que param o terminal ao mesmo tempo: 
[ https://www.npmjs.com/package/concurrently ]
### npm install --save-dev concurrently

Lançar alterações no package.json
"dev": "concurrently \"react-scripts start\" \"npm run server\"",

Agora, para rodar o servidor do front e do back:
### npm run dev

---------------------------------------------------------
Fim aula 4, vamos subir para o Heroku

Mais uma alteração no package.json:

"server": "node ./server.js",
"dev": "concurrently \"react-scripts start\" \"npm run server\"",
"start": "npm run server",

Para rodar o projeto:
### npm run server

---------------------------------------------------------
