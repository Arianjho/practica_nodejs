exports.success = function(req, res, message = '', status = 200, options = '') {
    if (options == '') {
        res.status(status).send({
            error: false,
            status: status,
            body: message
        });
    } else {
        res.status(status).send({
            error: false,
            status: status,
            body: message,
            token: options
        });
    }
}

exports.error = function(req, res, message = 'Error interno', status = 500) {
    res.status(status).send({
        error: true,
        status: status,
        body: message
    });
}