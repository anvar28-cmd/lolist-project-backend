exports.up = function (knex) {
    return knex.schema.createTable("spell", (table) => {
      table.string("id").primary();
      table.string("name").notNullable();
      table.string("blurb").notNullable();
      table.string("image").notNullable();
    });
  };
  
  exports.down = function (knex) {
    return knex.schema.dropTable("spell");
  };
  