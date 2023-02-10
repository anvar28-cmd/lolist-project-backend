exports.up = function (knex) {
    return knex.schema.createTable("champion", (table) => {
      table.uuid("id").primary();
      table
        .uuid("users_id")
        .references("users.id")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.string("hero_name").notNullable();
    });
  };
  
  exports.down = function (knex) {
      return knex.schema.dropTable("champion");
  };
  