githubUserSearch.factory('UserInfo', ['$http', function($http) {

  var queryUrl = 'https://api.github.com/search/users';

  return {
    query: function(userId) {
      return $http({
        url: queryUrl+"/"+userid+"/repos",
        method: 'GET',
        params: {
          'q': userId
        }
      });
    }
  };
}]);
