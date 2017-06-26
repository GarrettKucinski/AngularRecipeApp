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

            this.saveRecipe = (recipe) => {
                $http.post('http://localhost:5000/api/recipes', recipe);
            };
        });
}());