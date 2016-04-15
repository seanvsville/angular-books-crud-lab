angular
  .module('libraryApp')
  .controller('BooksShowController', BooksShowController);

BooksShowController.$inject=['$http', '$routeParams', '$location'];

var endpoint = 'https://super-crud.herokuapp.com/books';

function BooksShowController($http, $routeParams, $location) {
  var vm = this;
  $http({
    method: 'GET',
    url: endpoint + '/' + $routeParams.id
  }).then(function successCallback(json) {
    vm.book = json.data;
  });

}
