exports.up = function (knex) {
    return knex.schema.createTable("build", (table) => {
      table.uuid("id").primary();
      table
        .uuid("champion_id")
        .references("champion.id")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.string("item1").notNullable();
      table.string("item2").notNullable();
      table.string("item3").notNullable();
      table.string("item4").notNullable();
      table.string("item5").notNullable();
      table.string("item6").notNullable();
      table.string("spell1").notNullable();
      table.string("spell2").notNullable();
    });
  };
  
  exports.down = function (knex) {
      return knex.schema.dropTable("build");
  };
  