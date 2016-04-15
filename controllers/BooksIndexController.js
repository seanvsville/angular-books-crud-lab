angular.module('libraryApp')
  .controller('BooksIndexController', BooksIndexController);

BooksIndexController.$inject=['$http'];

var endpoint = 'https://super-crud.herokuapp.com/books';

function BooksIndexController( $http ) {
  var vm = this;
  $http({
    method: 'GET',
    url: endpoint
  }).then(function successCallback(response) {
    vm.books = response.data.books;
  }, function errorCallback(response) {
    console.log('There was an error: ', response);
  });



}
