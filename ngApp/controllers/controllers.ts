let FB;

namespace MyApp.Controllers {

// landing pages
  export class HomeController {

    public goToSignup() {
      this.$rootScope.$broadcast('signup', {value: 'get-started'});
    }

    public fbLogin() {
      FB.login(cb);
      function cb(res) {
        console.log('LOGIN RESPONSE: '+ JSON.stringify(res));
        FB.api('/me', {fields: ['email', 'first_name', 'last_name']}, function(response) {
          console.log('USER: '+ JSON.stringify(response));
        });
      }
    }

    public constructor(
      private $scope: ng.IScope,
      private $rootScope: ng.IRootScopeService,
      private $state: ng.ui.IStateService,
      public $window: ng.IWindowService,
      public $document,
      private userService: MyApp.Services.UserService
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
