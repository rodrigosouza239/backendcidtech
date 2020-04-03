const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {

    async index(request, response) {

    const usuarios = await connection('usuarios').select('*');
       
    return response.json(usuarios);
    },

    async create(request, response) {
        const { name, password, empresa, email, whatsapp, city, uf } = request.body;

        const id = crypto.randomBytes(4).toString('HEX');

        await connection('usuarios').insert({
            id,
            name,
            password,
            empresa,
            email,
            whatsapp,
            city,
            uf,

        })

        return response.json({ id });
    }
};