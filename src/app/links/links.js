angular.module('testapp.links', [
  'ui.router'
])

  .config(function ($stateProvider) {

    $stateProvider
      .state('links', {
        url: '/links',
        templateUrl: 'links/links.tpl.html',
        controller: 'LinksCtrl as linksCtrl'
      })
  })

  .service('LinkService', function LinkService($http, $q, $log) {
    var linkService = this;

    linkService.data = {};

    linkService.fetchLinks = function () {

      $log.debug("fetching link data...");

      var deferred = $q.defer();

      if (_.isEmpty(linkService.data)) {

        $http.get('/api/links').then(function (result) {

          linkService.data = result.data;
          deferred.resolve(linkService.data);

          $log.debug("...Data loaded");

        }, function (error) {
          deferred.reject(error);
        })
      } else {
        $log.debug("...Returning cached data");
        deferred.resolve(linkService.data);
      }

      return deferred.promise;
    }
  })

  .controller('LinksCtrl', function LinksCtrl($log, LinkService) {

    var linksCtrl = this;
    linksCtrl.linkData = {};

    LinkService.fetchLinks().then(function (result) {

      $log.debug("LinkService.fetchLinks called: ", result);
      linksCtrl.linkData = result;
    });
  })

;
