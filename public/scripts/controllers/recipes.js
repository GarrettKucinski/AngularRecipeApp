(function() {
    'use strict';

    angular.module('app')
        .controller('RecipesController', function($scope, $location, dataService) {
            dataService.getAllCategories(response => {
                $scope.categories = response.data;
            });

            dataService.getRecipes(response => {
                $scope.recipes = response.data;
            });

            $scope.deleteRecipe = (recipe, index) => {
                if (confirm(`Are you sure you want to delete ${recipe.name}?`)) {
                    dataService.deleteRecipe(recipe._id, response => {
                        $scope.recipes.splice(index, 1);
                    });
                }
            };

            $scope.addRecipe = () => {
                $location.path('/add');
            };
        });
}());