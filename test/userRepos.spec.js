describe('factory: UserRepos', function() {

  var userrepos;

  beforeEach(module('GitUserSearch'));

  beforeEach(inject(function(UserRepos) {
    userrepos = UserRepos;
  }));

  beforeEach(inject(function($httpBackend) {
    httpBackend = $httpBackend;
    httpBackend
      .expectGET("https://api.github.com/search/users?q=hello/repos")
      .respond(
        { repos: repos }
      );
    }
  ));

  it('responds to query', function() {
    expect(userrepos.query).toBeDefined();
  });

  it('returns search results', function() {
    search.query('hello')
      .then(function(response) {
        expect(response.data.repos).toEqual(repos);
      });
    httpBackend.flush();
  });


});
