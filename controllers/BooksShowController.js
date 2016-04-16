angular
  .module('libraryApp')
  .controller('BooksShowController', BooksShowController);

BooksShowController.$inject=['$http', '$routeParams', '$location'];

var endpoint = 'https://super-crud.herokuapp.com/books';

function BooksShowController($http, $routeParams, $location) {
  var vm = this;
  var bookId = $routeParams.id;

  $http({
    method: 'GET',
    url: endpoint + '/' + bookId
  }).then(function successCallback(response) {
    vm.book = response.data;
  });

  vm.editBook = function (book) {
    $http({
      method: 'PUT',
      url: endpoint + '/' + bookId,
      data: book
    }).then(function successEditCallBack(response) {
      // no action necessary
    }, function errorEditCallback(response) {
      console.log('There was an editing error: ', response);
    });
  };

  vm.deleteBook = function (book) {
    $http({
      method: 'DELETE',
      url: endpoint + '/' + bookId
    }).then(function successDeleteCallBack (response) {
      $location.path('/');
    }, function errorDeleteCallback (response) {
      console.log('There was a book deleting error: ', response);
    });
  };

}
