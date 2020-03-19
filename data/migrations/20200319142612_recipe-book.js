
exports.up = function(knex) {
    return knex.schema
    .createTable("recipe", table => {
      table.increments();
      table
        .string("recipe_name", 128)
        .unique()
        .notNullable();
    })
    .createTable("ingredients", table => {
      table.increments();
      table
        .string("ingredient", 128)
        .unique()
        .notNullable();
    })
    .createTable("recipe_ingredients", table => {
      table.increments();
      table
        .integer("recipeId")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipe")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table
        .integer("ingredientsId")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("ingredients")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.integer("quantity").notNullable();
      table.string("measurement").notNullable();
    })
    .createTable("steps", table => {
      table.increments();
      table
        .integer("recipeId")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipe")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.integer("Order_Number").notNullable();
      table.text("Step_details").notNullable();
    });
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists("steps")
    .dropTableIfExists("Recipe_Ingredients")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipe");
};
