## Template base

Template base.

### Construido en

- [React](https://es.reactjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)

### Instalación del proyecto

Clone este repositorio. Necesitarás node y npm instalado globalmente en tu equipo.

Instalación:

1. Ejecutar el comando "npm install" en la consola para instalar las dependencias.
2. Ejecutar el comando "npm run dev" para ejecutar la aplicación.

### Rutas de la aplicación

Ruta inicial.

- `localhost:5173`

### Otros comandos

- `dev-host`: Para poder mostrar la aplicación mediante la ruta del host local.
- `build`: Desplegar la aplicacion para producción y creará una carpeta llamada dist.
- `lint`: Verificar errores en el código.
- `lint-fix`: Tratar de solucionar los errores que se presentan.
- `preview`: Arrancará el servidor web estático local que sirve los archivos desde dist en http://localhost:4173.
- `prepare`: Permite a husky ejecutar este último comando luego de su instalación.

### Dependencias

1. [React Query](https://tanstack.com/query/v4/?from=reactQueryV3&original=https://react-query-v3.tanstack.com/)
2. [Material UI](https://mui.com/)
3. [Material UI Icons](https://mui.com/material-ui/material-icons/#main-content)
4. [React Helmet](https://www.npmjs.com/package/react-helmet)
5. [React Hook Forms](https://react-hook-form.com/)
6. [React Router Dom](https://reactrouter.com/en/v6.3.0/)
7. [React Toastify](https://fkhadra.github.io/react-toastify/introduction/)
8. [React Multi Carousel](https://www.npmjs.com/package/react-multi-carousel)
9. [React Scratchcard V2](https://www.npmjs.com/package/react-scratchcard-v2)
10. [React To Print](https://github.com/gregnb/react-to-print#readme)
11. [Axios](https://axios-http.com/)
12. [Sweet Alert 2](https://sweetalert2.github.io/)
13. [Eslint](https://github.com/eslint/eslint)
14. [Prettier](https://github.com/prettier/prettier)
15. [Mui-datatables](https://www.npmjs.com/package/mui-datatables)

### Eslint y Prettier

ESLint es un linter de código JavaScript. Su función es analizar el código de nuestra aplicación, detectar problemas en por medio de patrones y si esta a su alcance resolverlos él mismo.

Por otro lado, Prettier es un formateador de código. Tambien analiza nuestro código JavaScript. Pero no solo detecta problemas (como la longitud de una línea, o si una variable no se usa nunca); re-escribe nuestro código cada vez que salvamos un archivo, permitiéndonos ver y entender cuales son los problemas de nuestra aplicación.

**Recomendación**: Para poder tomar ventaja de estas herramientas, si estas usando VS Code, debes instalar la siguiente extensión.

- [Extensión Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

Se configuró la aplicación para que Eslint sea el que señala los errores, y Eslint se encarga exclusivamente del indexado del código. Para esto, debes acceder a las configuraciones, y debes insertar lo siguiente:

```
{
    "prettier.configPath": ".prettierrc.js",
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.formatOnSave": true
}
```
