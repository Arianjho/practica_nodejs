const companyService = require('../services/companyService');
const companyValidation = require("../validations/CompanyValidation");
const response = require('../../config/_responses');

const getAllCompanies = async (req, res) => {
    try {
        const allCompanies = await companyService.getAllCompanies();
        return response.success(req, res, allCompanies, 200);
    } catch (error) {
        return response.error(req, res, "Ocurrió un error al listar las empresas", 500);
    }
};

const getOneCompany = async (req, res) => {
    try {
        const companyId = parseInt(req.params.companyId);
        if (isNaN(companyId)) {
            return response.error(req, res, "El ID proporcionado no es válido", 400);
        }
        const company = await companyService.getOneCompany(companyId);
        if (!company) {
            return response.error(req, res, "No se encontró la empresa", 404);
        }
        return response.success(req, res, company, 200);
    } catch (error) {
        return response.error(req, res, "Ocurrió un error al buscar la empresa", 500);
    }
};


const createNewCompany = async (req, res) => {
    const errors = companyValidation.validationResult(req).formatWith(({ location, msg, param, value, nestedErrors }) => {
        return { type: 'field', value: value, msg: msg };
    });

    if (!errors.isEmpty()) {
        return response.error(req, res, errors.mapped(), 400);
    }

    try {
        const createdCompany = await companyService.createNewCompany(req);
        return response.success(req, res, createdCompany, 200);
    } catch (error) {
        return response.error(req, res, "Ocurrió un error al crear la empresa", 500);
    }
}

const updateOneCompany = async (req, res) => {
    const { companyId } = req.params;
    if (isNaN(companyId)) {
        return response.error(req, res, "El id no es válido", 500);
    }

    const errors = companyValidation.validationResult(req).formatWith(({ location, msg, param, value, nestedErrors }) => {
        return { type: 'field', value: value, msg: msg };
    });

    if (!errors.isEmpty()) {
        return response.error(req, res, errors.mapped(), 400);
    }

    const data = {
        id: parseInt(companyId),
        body: req.body,
    }

    try {
        const updatedCompany = await companyService.updateOneCompany(data);
        return response.success(req, res, `La empresa ${updatedCompany.name} fue editada de la base de datos`, 200);
    } catch (error) {
        if (error.code === "P2025") {
            return response.error(req, res, "No existe la empresa", 404);
        }
        return response.error(req, res, "Ocurrió un error al editar la empresa", 500);
    }
}

const deleteOneCompany = async (req, res) => {
    try {
        const companyId = parseInt(req.params.companyId);
        if (isNaN(companyId)) {
            return response.error(req, res, "El ID proporcionado no es válido", 400);
        }
        await companyService.deleteOneCompany(companyId);
        return response.success(req, res, { message: "Empresa eliminada con éxito" }, 200);
    } catch (error) {
        if (error.code === "P2025") {
            return response.error(req, res, "No existe la empresa", 404);
        }
        return response.error(req, res, "Ocurrió un error al eliminar la empresa", 500);
    }
}

module.exports = {
    getAllCompanies,
    getOneCompany,
    createNewCompany,
    updateOneCompany,
    deleteOneCompany
};
