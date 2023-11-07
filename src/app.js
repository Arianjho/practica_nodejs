const express = require('express');
const config = require('./config/_config');
const cors = require('./api/middlewares/_cors');
const json = require('./api/middlewares/_json');
const morgan = require('./api/middlewares/_morgan');

const routes = require('./api/routes/_routes');

const app = express();
cors(app);
json(app);
morgan(app);

app.listen(config.app.port, () => {
    console.log(`Servidor corriendo en http://localhost:${config.app.port}`);
});

app.set('port', config.app.port);

routes(app);