'use strict';

/**
 * @ngdoc overview
 * @name yapp
 * @description
 * # yapp
 *
 * Main module of the application.
 */
 angular
 .module('yapp', [
    'ui.router',
    'snap',
    'ngAnimate',
    'angular-flexslider'
    ])
 .config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.when('/', '/dashboard/home');
    $urlRouterProvider.when('/dashboard', '/dashboard/home');
    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('base', {
        abstract: true,
        url: '',
        templateUrl: 'views/base.html'
    })
    .state('login', {
      url: '/login',
      parent: 'base',
      templateUrl: 'views/login.html',
      controller: 'LoginCtrl'
  })
    .state('dashboard', {
      url: '/dashboard',
      parent: 'base',
      templateUrl: 'views/dashboard.html',
      controller: 'DashboardCtrl'
  })
    .state('home', {
        url: '/home',
        parent: 'dashboard',
        templateUrl: 'views/dashboard/home.html'
    })
    .state('services', {
        url: '/services',
        parent: 'dashboard',
        templateUrl: 'views/dashboard/services.html'
    })
    .state('about_us', {
        url: '/about_us',
        parent: 'dashboard',
        templateUrl: 'views/dashboard/about_us.html'
    })
    .state('contact', {
        url: '/contact',
        parent: 'dashboard',
        templateUrl: 'views/dashboard/contact.html'
    });

});
