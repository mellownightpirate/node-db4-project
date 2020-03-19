exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex("recipe_ingredients")
      .truncate()
      .then(function() {
        // Inserts seed entries
        return knex("recipe_ingredients").insert([
          {
            recipeId: "1",
            ingredientsId: "1",
            quantity: "200",
            measurement: "grams"
          },
          {
            recipeId: "1",
            ingredientsId: "2",
            quantity: "400",
            measurement: "grams"
          },
          {
            recipeId: "1",
            ingredientsId: "3",
            quantity: "250",
            measurement: "ml"
          },
          {
            recipeId: "1",
            ingredientsId: "4",
            quantity: "1",
            measurement: "teaspoon"
          },
          {
            recipeId: "2",
            ingredientsId: "5",
            quantity: "1",
            measurement: "item"
          },
          {
            recipeId: "2",
            ingredientsId: "6",
            quantity: "30",
            measurement: "ml"
          },
          {
            recipeId: "2",
            ingredientsId: "7",
            quantity: "50",
            measurement: "grams"
          },
          {
            recipeId: "2",
            ingredientsId: "8",
            quantity: "1",
            measurement: "cup"
          },
          {
            recipeId: "2",
            ingredientsId: "9",
            quantity: "100",
            measurement: "grams"
          },
          {
            recipeId: "3",
            ingredientsId: "11",
            quantity: "1",
            measurement: "item"
          },
          {
            recipeId: "3",
            ingredientsId: "12",
            quantity: "2",
            measurement: "tablespoons"
          },
          {
            recipeId: "3",
            ingredientsId: "13",
            quantity: "150",
            measurement: "grams"
          },
          {
            recipeId: "3",
            ingredientsId: "14",
            quantity: "3",
            measurement: "cups"
          },
          {
            recipeId: "3",
            ingredientsId: "6",
            quantity: "1.5",
            measurement: "ounces"
          }
        ]);
      });
  };