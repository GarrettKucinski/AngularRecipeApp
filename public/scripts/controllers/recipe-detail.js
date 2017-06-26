(function() {
    'use strict';

    angular.module('app')
        .controller('RecipeDetailController', function($scope, $routeParams, $location, dataService) {

            const newRecipe = {
                "name": "",
                "desciption": "",
                "category": "",
                "prepTime": "",
                "cookTime": "",
                "ingredients": [],
                "steps": []
            };

            $scope.editing = $location.url() === `/edit/${$routeParams.id}` ? true : false;

            $scope.cancelRecipeEdit = () => {
                $location.path('/');
            };

            $scope.saveRecipe = (recipe) => {
                dataService.saveRecipe(recipe);
            };

            const ingredientTemplate = {
                "foodItem": "",
                "condition": "",
                "amount": ""
            };

            $scope.addIngredient = function(recipe) {
                recipe.ingredients.push(ingredientTemplate);
            };

            dataService.getRecipes(response => {
                const recipes = response.data;
                $scope.recipeDetail = recipes.filter(recipe => {
                    return recipe._id === $routeParams.id;
                })[0] || newRecipe;
            });

            dataService.getAllFoodItems(response => {
                $scope.foodItems = response.data;
            });

            dataService.getAllCategories(response => {
                $scope.categories = response.data;
            });

        });
}());