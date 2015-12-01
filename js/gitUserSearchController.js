githubUserSearch.controller('GitUserSearchController', ['$resource', function($resource) {

  var searchResource = $resource('https://api.github.com/search/users');
  var self = this;

  self.doSearch = function() {
    self.searchResult = searchResource.get(
        { q: self.searchTerm,
          access_token: "4eb03682b96f713d72de3399e09782e75c66279b"
        }
      );
    };
}]);
