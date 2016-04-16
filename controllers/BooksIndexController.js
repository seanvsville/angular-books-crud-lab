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

vm.createBook = function () {
  $http({
    method: 'POST',
    url: endpoint,
    data: vm.newBook,
  }).then(function successCreateCallback(response) {
    console.log('RESPONSE: ', response);
    vm.books.push(response.data);
    console.log('RESPONSE.DATA: ', response.data);
  }, function errorCreateCallback(response) {
    console.log('There was an error creating new book: ', response);
  });
};

}
