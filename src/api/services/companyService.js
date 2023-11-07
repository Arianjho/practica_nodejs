const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const moment = require('moment-timezone');

const now = moment.tz("America/Lima").format();

const getAllCompanies = async () => {
    try {
        const allCompanies = await prisma.companies.findMany();
        return allCompanies;
    } catch (error) {
        throw error;
    }
};

const getOneCompany = async (id) => {
    try {
        const company = await prisma.companies.findUnique({
            where: { id: id }
        });

        return company;
    } catch (error) {
        throw error;
    }
};

const createNewCompany = async (fields) => {
    try {
        const { name } = fields.body;
        const newCompany = await prisma.companies.create({
            data: {
                name,
                createdAt: now
            }
        })
        return newCompany;
    } catch (error) {
        throw error;
    }
};

const updateOneCompany = async (fields) => {
    try {
        const { name } = fields.body
        const updateCompany = await prisma.companies.update({
            where: { id: fields.id },
            data: { 
                name: name,
                updatedAt: now
            },
        })
        return updateCompany;
    } catch (error) {
        throw error;
    }
};

const deleteOneCompany = async (id) => {
    try {
        const deleteCompany = await prisma.companies.delete({
            where: { id: id }
        });
        return deleteCompany;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    getAllCompanies,
    getOneCompany,
    createNewCompany,
    updateOneCompany,
    deleteOneCompany
};
