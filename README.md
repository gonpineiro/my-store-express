#### Deply en Heroku
1) Instalar Heroku-cli
2) Hace el login con `heroku login`
3) Dentro del proyecto ejecutar `heroku create`, va generar el repositorio en heroku, para abrirlo, usar `heroku open`
4) Con `heroku logs --tail` podemos ver la cola de logs 
5) Agergar la siguente clave en el package.json:

```json
"engines": {
    "node": "14.x"
  },
```

6) Probar en modo local `heroku local web`

#### Middlewares populares en Express.js

##### CORS
Middleware para habilitar CORS (Cross-origin resource sharing) en nuestras rutas o aplicación. http://expressjs.com/en/resources/middleware/cors.html

##### Morgan
Un logger de solicitudes HTTP para Node.js. http://expressjs.com/en/resources/middleware/morgan.html

##### Helmet
Helmet nos ayuda a proteger nuestras aplicaciones Express configurando varios encabezados HTTP. ¡No es a prueba de balas de plata, pero puede ayudar! https://github.com/helmetjs/helmet

##### Express Debug
Nos permite hacer debugging de nuestras aplicaciones en Express mediante el uso de un toolbar en la pagina cuando las estamos desarrollando. https://github.com/devoidfury/express-debug

##### Express Slash
Este middleware nos permite evitar preocuparnos por escribir las rutas con o sin slash al final de ellas. https://github.com/ericf/express-slash

##### Passport
Passport es un middleware que nos permite establecer diferentes estrategias de autenticación a nuestras aplicaciones. https://github.com/jaredhanson/passport
