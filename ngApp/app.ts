namespace MyApp {

    angular.module('app', ['ui.router', 'ngResource', 'ui.bootstrap', 'duScroll']).config((
        $stateProvider: ng.ui.IStateProvider,
        $urlRouterProvider: ng.ui.IUrlRouterProvider,
        $locationProvider: ng.ILocationProvider,
    ) => {

        // Define routes
        $stateProvider
            .state('Home', {
                url: '/',
                templateUrl: '/ngApp/views/home.html',
                controller: MyApp.Controllers.HomeController,
                controllerAs: 'vm'
            })
            .state('About', {
                url: '/about',
                templateUrl: '/ngApp/views/about.html',
                controller: MyApp.Controllers.HomeController,
                controllerAs: 'vm'
            })
            .state('Careers', {
                url: '/careers',
                templateUrl: '/ngApp/views/careers.html',
                controller: MyApp.Controllers.HomeController,
                controllerAs: 'vm'
            })
            .state('Pricing', {
                url: '/pricing',
                templateUrl: '/ngApp/views/pricing.html',
                controller: MyApp.Controllers.HomeController,
                controllerAs: 'vm'
            })
            .state('Login', {
                url: '/login',
                templateUrl: '/ngApp/views/login.html',
                controller: MyApp.Controllers.HomeController,
                controllerAs: 'vm'
            })
            .state('notFound', {
                url: '/notFound',
                templateUrl: '/ngApp/views/notFound.html',
                controller: MyApp.Controllers.HomeController,
                controllerAs: 'vm'
            });

        // Handle request for non-existent route
        $urlRouterProvider.otherwise('/notFound');

        // Enable HTML5 navigation
        $locationProvider.html5Mode(true);
    });



}
