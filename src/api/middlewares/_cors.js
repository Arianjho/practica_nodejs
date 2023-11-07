const cors = require('cors');

/*const corsOptions = {
    origin: 'http://tu-dominio-aqui.com',
    optionsSuccessStatus: 200
}*/

module.exports = (app) => {
    app.use(cors());
    //app.use(cors(corsOptions));
};