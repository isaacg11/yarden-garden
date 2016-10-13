namespace MyApp {

    angular.module('app', ['ui.router', 'ngResource', 'ui.bootstrap']).config((
        $stateProvider: ng.ui.IStateProvider,
        $urlRouterProvider: ng.ui.IUrlRouterProvider,
        $locationProvider: ng.ILocationProvider
    ) => {
        // Define routes
        $stateProvider
            .state('Home', {
                url: '/',
                templateUrl: '/ngApp/views/home.html',
                controller: MyApp.Controllers.HomeController,
                controllerAs: 'controller'
            })
            .state('About', {
                url: '/about',
                templateUrl: '/ngApp/views/about.html'
            })
            .state('Careers', {
                url: '/careers',
                templateUrl: '/ngApp/views/careers.html'
            })
            .state('Pricing', {
                url: '/pricing',
                templateUrl: '/ngApp/views/pricing.html'
            })
            .state('Login', {
                url: '/login',
                templateUrl: '/ngApp/views/login.html'
            })
            .state('notFound', {
                url: '/notFound',
                templateUrl: '/ngApp/views/notFound.html'
            });

        // Handle request for non-existent route
        $urlRouterProvider.otherwise('/notFound');

        // Enable HTML5 navigation
        $locationProvider.html5Mode(true);
    });



}
