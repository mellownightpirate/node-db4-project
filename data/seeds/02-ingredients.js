exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex("ingredients")
      .truncate()
      .then(function() {
        // Inserts seed entries
        return knex("ingredients").insert([
          { ingredient: "unsalted butter" },
          { ingredient: "caster sugar" },
          { ingredient: "eggs" },
          { ingredient: "cooking oil" },
          { ingredient: "cocoa powder" },
          { ingredient: "red food coloring" },
          { ingredient: "pure vanilla extract" },
          { ingredient: "white vinegar" },
          { ingredient: "plain cake flour" },
          { ingredient: "baking soda" },
          { ingredient: "salt" },
          { ingredient: "buttermilk" },
          { ingredient: "cream cheese" },
          { ingredient: "lemon juice" },
          { ingredient: "icing sugar" }
        ]);
      });
  };