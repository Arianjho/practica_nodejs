const jwt = require('jsonwebtoken');
const response = require('../config/_responses');

const authenticateJWT = (req, res, next) => {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];

    if (token) {
        jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
            if (err) {
                return response.error(req, res, `Token no válido`, 403);
            }

            req.user = user;
            next();
        });
    } else {
        return response.error(req, res, `Token no proporcionado`, 401);
    }
};

module.exports = authenticateJWT;
