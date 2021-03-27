
exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl => {
      tbl.increments('id');
      tbl.string('VIN').unique().notNullable();
      tbl.string('Make').notNullable();
      tbl.string("Model").notNullable();
      tbl.integer("Mileage").notNullable();
      tbl.string("Title");
      tbl.string("Transmission")
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
