const express = require("express");
const companyController = require("../controllers/companyController");
const companyValidation = require("../validations/CompanyValidation");

const router = express.Router();

router.get("/", companyController.getAllCompanies);
router.get("/:companyId", companyController.getOneCompany);
router.post("/", companyValidation.validateFieldsCompany,  companyController.createNewCompany);
router.put("/:companyId", companyValidation.validateFieldsCompany, companyController.updateOneCompany);
router.delete("/:companyId", companyController.deleteOneCompany);

module.exports = router;