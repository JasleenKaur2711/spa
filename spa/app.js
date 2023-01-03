
    angular.module('lab7App', [ngRoute])

        .controller('MyController', function ($scope, $http) {
            
            $http.get('/data.json').then(function (response) {
                $scope.datas = response.data;
            });

            $scope.rowLimit = 6;
            $scope.limit = 6;
    
            $scope.order = "";
            $scope.genderCase = "uppercase";
            $scope.search = "";
    

            $scope.setName = function () {
                if($scope.order === "name") {
                    $scope.order = "-name";
                    return;
                }
                $scope.order = "name";
            }

            $scope.setAge = function () {
                if($scope.order === "age") {
                    $scope.order = "-age";
                    return;
                }
                $scope.order = "age";
            }

            $scope.setGender = function () {
                if($scope.order === "gender") {
                    $scope.order = "-gender";
                    return;
                }
                $scope.order = "gender";
            }

            $scope.setDob = function () {
                if($scope.order === "date") {
                    $scope.order = "-date";
                    return;
                }
                $scope.order = "date";
            }

            $scope.setBookDate = function () {
                if($scope.order === "book_Date") {
                    $scope.order = "-book_Date";
                    return;
                }
                $scope.order = "book_Date";
            }

            $scope.setCur = function () {
                if($scope.order === "orVal") {
                    $scope.order = "-orVal";
                    return;
                }
                $scope.order = "orVal";
            }

            $scope.setSt = function () {
                if($scope.order === "orSt") {
                    $scope.order = "-orSt";
                    return;
                }
                $scope.order = "orSt";
            }
        })
        .controller("searchController", function ($scope, $rootScope) {
            $scope.item = "";
            $scope.setSearch = function () {
                $rootScope.search = $scope.item;
            }
        })

        .config(function ($routeProvider) {
            $routeProvider
                .when("/canvas", {
                    templateUrl: "Canvas_loc.html",
                    controller: "mainController"
                })
                .when("/contactus", {
                    templateUrl: "ContactUs.html",
                    controller: "homeController"
                })
                .when("/bookingform", {
                    templateUrl: "BookingForm.html",
                    controller: "signupController"
                });
        })
        .config(['$locationProvider', function ($locationProvider) {
            $locationProvider.hashPrefix('');
        }])

