const express = require("express");
const recipesModule = require("../helpers/recipe-models");

const router = express.Router();

router.get("/", (req, res) => {
  recipesModule
    .get()
    .then(recipes => {
      res.status(200).json(recipes);
    })
    .catch(error => {
      res.status(500).json(error.message);
    });
});

router.get("/:id", (req, res) => {
  recipesModule
    .getById(req.params.id)
    .then(recipe => {
      res.status(200).json(recipe);
    })
    .catch(error => {
      res.status(500).json(error.message);
    });
});

router.get("/:id/ingredients", (req, res) => {
  recipesModule
    .getShoppingList(req.params.id)
    .then(ingredients => {
      res.status(200).json(ingredients);
    })
    .catch(error => {
      res.status(500).json(error.message);
    });
});

router.get("/:id/instructions", (req, res) => {
  recipesModule
    .getInstructions(req.params.id)
    .then(steps => {
      res.status(200).json(steps);
    })
    .catch(error => {
      res.status(500).json(error.message);
    });
});

module.exports = router;