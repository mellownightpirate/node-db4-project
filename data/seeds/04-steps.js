exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("steps")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("steps").insert([
        {
          recipeId: "1",
          Order_Number: "1",
          Step_details: `Heat oven to 350°F | 175°C. Lightly grease two 8-inch cake pans with butter or nonstick oil spray and lightly dust with 1 tablespoon of the sifted cocoa powder. 
            Cream butter and sugar together until light in colour. Add eggs one at a time, beating well after each addition to combine well.
            In a smaller bowl, mix together oil, remaining cocoa powder, red food colouring and vanilla until smooth. Stir colour mixture and vinegar through the creamed sugar mixture to combine.
            Sift together flour, baking soda and salt in a separate bowl. Add half of the dry ingredients and half of the buttermilk to the wet ingredients; mix well. Repeat with remaining dry ingredients and buttermilk. 
            Divide batter among the 2 prepared pans and bake for about 25 to 30 minutes, or until a toothpick inserted into the centre of the cake comes out clean. Cool on a wire rack completely.`
        },
        {
          recipeId: "2",
          Order_Number: "1",
          Step_details: `Heat oven to 180C/160C fan/gas 4. Butter a 23cm springform cake tin and line the base with baking parchment. Tip the biscuits into a food processor, blitz to crumbs and pour in the melted butter. 
          (You could also tip the biscuits into a bag, bash with a rolling pin into crumbs and mix in the butter.) Press the biscuit mixture into the base of the tin – the easiest way to do this is by flattening it with your hand under a sheet of cling film. 
          Place the tin on a tray and bake for 10 mins, then remove from the oven to cool.`
        },
        {
          recipeId: "2",
          Order_Number: "2",
          Step_details: `Meanwhile, scrape the cream cheese into a bowl with 3 tbsp of the caramel sauce, the vanilla, sugar and flour, and beat until smooth. 
          Beat in the eggs, one at a time, until you have a thick, smooth custard consistency. Tip over the base, scraping the bowl clean, and bake in the oven for 10 mins. 
          Reduce the temperature to 140C/120C fan/gas 1 and continue to bake for 25-30 mins until there is a slight wobble in the centre. Turn off the heat and leave the door just slightly ajar – a tea towel holding the door open is ideal. 
          This should leave you with a completely smooth top, but if there are a couple of small cracks, don’t worry. Leave the cheesecake in the oven until completely cool (overnight is fine), then chill until needed. Will keep in the fridge for two days.`
        },
        {
          recipeId: "3",
          Order_Number: "1",
          Step_details: `Heat the oven to 190C/170 fan/gas 5. Toss 575g peeled, cored and sliced Bramley apples with 2 tbsp golden caster sugar and put in a 23cm round baking dish at least 5cm deep, or a 20cm square dish. 
          Flatten down with your hand to prevent too much crumble falling through.`
        },
        {
          recipeId: "3",
          Order_Number: "2",
          Step_details: `Put 175g plain flour and 110g golden caster sugar in a bowl with a good pinch of salt. 
          Slice in 110g cold butter and rub it in with your fingertips until the mixture looks like moist breadcrumbs. 
          Shake the bowl and any big bits will come to the surface – rub them in. Alternatively, pulse in a processor until sandy (don’t over-process).`
        },
        {
          recipeId: "3",
          Order_Number: "3",
          Step_details: `Pour the crumb mix over the apples to form a pile in the centre, then use a fork to even out.
          Gently press the surface with the back of the fork so the crumble holds together and goes crisp, then lightly drag the fork over the top for a decorative finish.
          Sprinkle 1 tbsp rolled oats and 1 tbsp demerara sugar over evenly, if you wish.
          Set on a baking tray and put in the preheated oven for 35-40 minutes, until the top is golden and the apples feel very soft when you insert a small, sharp knife. Leave to cool for 10 minutes before serving.`
        }
      ]);
    });
};
