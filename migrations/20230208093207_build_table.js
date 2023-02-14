exports.up = function (knex) {
  return knex.schema.createTable("build", (table) => {
    table.increments("id").primary();
    table
    .integer("users_id")
    .unsigned()
    .notNullable()
    .references('id')
    .inTable('users')
    .onUpdate("CASCADE")
    .onDelete("CASCADE");

    table
      .string("hero_id")
      .notNullable()
      .references("hero.id")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");

    table.string("description", 256).notNullable();

    table
      .integer("item1_id")
      .unsigned()
      .notNullable()
      .references("item.id")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");

    table
      .integer("item2_id")
      .unsigned()
      .references("item.id")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");

    table
      .integer("item3_id")
      .unsigned()
      .references("item.id")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");

    table
      .integer("item4_id")
      .unsigned()
      .references("item.id")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");

    table
      .integer("item5_id")
      .unsigned()
      .references("item.id")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");

    table
      .integer("item6_id")
      .unsigned()
      .references("item.id")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");

    table
      .string("spell1_id")
      .references("spell.id")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");

    table
      .string("spell2_id")
      .references("spell.id")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("build");
};
