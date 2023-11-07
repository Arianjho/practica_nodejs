const companies = require('./companyRoutes');
const response = require('../../config/_responses');

module.exports = (app) => {
  app.use("/api/companies", companies);
  app.use((req, res, next) => {
    return response.error(req, res, "Ruta no encontrada o método HTTP no soportado.", 404);
  });
};
