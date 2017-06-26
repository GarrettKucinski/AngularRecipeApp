(function() {
    angular.module('app')
        .service('dataService', function($http) {

            this.getAllCategories = callback => {
                $http.get('/api/categories').then(callback);
            };

            this.getRecipes = callback => {
                $http.get('/api/recipes').then(callback);
            };

            this.getAllFoodItems = callback => {
                $http.get('/api/fooditems').then(callback);
            };

            this.deleteRecipe = (id, callback) => {
                $http.delete(`/api/recipes/${id}`).then(callback);
            };

            this.saveRecipe = recipeData => {
                $http.post('/api/recipes', recipeData);
            };

            this.updateRecipe = (id, recipeData) => {
                $http.put(`/api/recipes/${id}`, recipeData);
            };
        });
}());