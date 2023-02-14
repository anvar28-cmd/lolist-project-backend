exports.up = function (knex) {
  return knex.schema.createTable("item", (table) => {
    table.integer("id").primary();
    table.string("name").notNullable();
    table.string("plaintext").notNullable();
    table.integer("gold").notNullable();
    table.string("image").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("item");
};

