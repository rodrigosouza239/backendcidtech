
exports.up = function(knex) {
        return knex.schema.createTable('loginkeys', function(table){
        table.increments();
  
        table.string('chaves').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();
  
        table.string('usuario_id').notNullable();
  
        table.foreign('usuario_id').references('id').inTable('usuarios');
      
      });
  };

exports.down = function(knex) {
    return knex.schema.dropTable('loginkeys');
};
