const connection = require('../database/connection'); 

module.exports = {

    async index(request, response) {
        const { page = 1} = request.query;

         const [count] = await connection('loginkeys').count();
          const loginkeys = await connection('loginKeys')
          .join('usuarios', 'usuario_id', '=', 'loginkeys.usuario_id')
          .limit(5)
          .offset((page - 1 ) * 5)
          .select([
         'loginkeys.*',
         'usuarios.name',
         'usuarios.email',
         'usuarios.password',
         'usuarios.whatsapp',
         'usuarios.city',
         'usuarios.uf'
        
        ]);

          response.header('X-Total-Count', count['count(*)'])
          
         return response.json(loginkeys);
    },

    async create(request, response){
        const { chaves, description, value } = request.body;
        const  usuario_id = request.headers.authorization;

       const [id] = await connection('loginkeys').insert({
            chaves,
            description,
            value,
            usuario_id,
        });
           return response.json({ id })
    },
    async delete(request, response){
     const { id } = request.params;
     const  usuario_id = request.headers.authorization;

     const loginkeys = await connection('loginkeys')
     .where('id', id)
     .select('usuario_id')
     .first();

     if(loginkeys.usuario_id === usuario_id ) {
         return response.status(401).json({ error: 'Operation not permitted.'});
     }

     await connection('loginkeys').where('id', id).delete();

     return response.status(204).send();

    }
}