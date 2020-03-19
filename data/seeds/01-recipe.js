exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex("recipe")
      .truncate()
      .then(function() {
        // Inserts seed entries
        return knex("recipe").insert([
          { recipe_name: "Red Velvet Cake" },
          { recipe_name: "Salted Caramel Cheesecake" },
          { recipe_name: "Apple Crumble in Custard" }
        ]);
      });
  };