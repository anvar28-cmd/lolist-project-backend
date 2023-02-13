exports.up = function (knex) {
    return knex.schema.createTable("champion", (table) => {
      table.string("id").primary();
      table
        .integer("users_id")
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.string("champion_name").notNullable();
    });
  };
  
  exports.down = function (knex) {
      return knex.schema.dropTable("champion");
  };
  