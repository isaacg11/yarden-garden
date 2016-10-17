namespace MyApp.Controllers {

// landing pages
    export class HomeController {
      public login;

      public goToSignup() {
        this.$rootScope.$broadcast('signup', {value: 'get-started'});
      }

      public constructor(
        private $scope: ng.IScope,
        private $rootScope: ng.IRootScopeService,
        private $state: ng.ui.IStateService,
        public $window: ng.IWindowService,
        public $document
      ) {

          $window.scrollTo(0, 0);

          $scope.$on('signup', function(event, data) {
            $state.go('Home').then(() => {
              let el = angular.element(document.getElementById('get-started'));
              $document.scrollToElement(el);
            })
          });
        }
      }
}
