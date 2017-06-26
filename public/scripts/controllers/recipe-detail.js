(function() {
    'use strict';

    angular.module('app')
        .controller('RecipeDetailController', function($scope, $routeParams, $location, dataService) {

            $scope.cancelRecipeEdit = () => {
                $location.path('/');
            };

            dataService.getRecipes(response => {
                const recipes = response.data;
                $scope.recipeDetail = recipes.filter(recipe => {
                    return recipe._id === $routeParams.id;
                })[0];
            });

            dataService.getAllFoodItems(response => {
                $scope.foodItems = response.data;
            });

            dataService.getAllCategories(response => {
                $scope.categories = response.data;
            });

            $scope.saveRecipe = (recipe) => {
                dataService.saveRecipe(recipe);
            };
        });
}());