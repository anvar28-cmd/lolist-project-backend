exports.up = function (knex) {
    return knex.schema.createTable("build", (table) => {
      table.increments("id").primary();
      table
        .string("champion_id")
        .references("champion.id")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.string("description", 256);
      table.string("item1").notNullable();
      table.string("img1").notNullable();
      table.string("item2");
      table.string("img2");
      table.string("item3");
      table.string("img3");
      table.string("item4");
      table.string("img4");
      table.string("item5");
      table.string("img5");
      table.string("item6");
      table.string("img6");
      table.string("spell1");
      table.string("img7");
      table.string("spell2");
      table.string("img8");
    });
  };
  
  exports.down = function (knex) {
      return knex.schema.dropTable("build");
  };
  