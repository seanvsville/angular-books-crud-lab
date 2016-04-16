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

  vm.editBook = function (book) {
    $http({
      method: 'PUT',
      url: endpoint + '/' + $routeParams.id,
      data: book
    }).then(function successEditCallBack(response) {
      console.log('json: ', response);
    }, function errorEditCallback(response) {
      console.log('There was an editing error: ', response);
    });
  };

}
