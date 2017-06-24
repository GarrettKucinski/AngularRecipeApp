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

            $scope.deleteRecipe = (id, index) => {
                dataService.deleteRecipe(id, response => {
                    $scope.recipes.splice(index, 1);
                });
            };

            $scope.addRecipe = () => {
                $location.path('/add');
            };
        });
}());