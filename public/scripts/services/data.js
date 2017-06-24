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
                $http({
                    url: `/api/recipes/${id}`,
                    method: 'DELETE'
                }).then(callback);
            };
        });
}());