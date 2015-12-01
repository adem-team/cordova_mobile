
var module = angular.module("sampleApp", ['ngRoute']);

module.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/salesman', {
                templateUrl: 'asset/partial/salesman/home.html',
                controller: 'HomeController'
            }).
            when('/salesman/newcustomer', {
                templateUrl: 'asset/partial/salesman/home/newcustomer.html',
                controller: 'HomeController'
            }).
            when('/salesman/sellingoutmaintain', {
                templateUrl: 'asset/partial/salesman/home/sellingoutmaintain.html',
                controller: 'HomeController'
            }).
            when('/salesman/stockmaintain', {
                templateUrl: 'asset/partial/salesman/home/stockmaintain.html',
                controller: 'HomeController'
            }).
            when('/salesman/salespromotionmaintain', {
                templateUrl: 'asset/partial/salesman/home/salespromotionmaintain.html',
                controller: 'HomeController'
            }).
            when('/salesman/jadwalkunjungan', {
                templateUrl: 'asset/partial/salesman/home/jadwalkunjungan.html',
                controller: 'HomeController'
            }).
            when('/salesman/petacustomer', {
                templateUrl: 'asset/partial/salesman/home/petacustomer.html',
                controller: 'HomeController'
            }).
            when('/salesman/absensi', {
                templateUrl: 'asset/partial/salesman/home/absensi.html',
                controller: 'HomeController'
            }).
            when('/salesman/profile', {
                templateUrl: 'asset/partial/salesman/home/profile.html',
                controller: 'HomeController'
            }).
            when('/salesman/dailysellingout', {
                templateUrl: 'asset/partial/salesman/home/dailysellingout.html',
                controller: 'HomeController'
            }).
            when('/salesman/dailystockharian', {
                templateUrl: 'asset/partial/salesman/home/dailystockharian.html',
                controller: 'HomeController'
            }).
            when('/salesman/monthlysellingout', {
                templateUrl: 'asset/partial/salesman/home/monthlysellingout.html',
                controller: 'HomeController'
            }).
            when('/salesman/monthlystockharian', {
                templateUrl: 'asset/partial/salesman/home/monthlystockharian.html',
                controller: 'HomeController'
            }).


            when('/spg', {
                templateUrl: 'asset/partial/spg/home.html',
                controller: 'HomeController'
            }).
            when('/spg/stockgudang', {
                templateUrl: 'asset/partial/spg/home/stockgudang.html',
                controller: 'HomeController'
            }).
            when('/spg/stockpromo', {
                templateUrl: 'asset/partial/spg/home/stockpromo.html',
                controller: 'HomeController'
            }).
            when('/spg/penjualan', {
                templateUrl: 'asset/partial/spg/home/penjualan.html',
                controller: 'HomeController'
            }).
            when('/spg/penjualanpromo', {
                templateUrl: 'asset/partial/spg/home/penjualanpromo.html',
                controller: 'HomeController'
            }).
            when('/spg/jadwalkunjungan', {
                templateUrl: 'asset/partial/spg/home/jadwalkunjungan.html',
                controller: 'HomeController'
            }).
            when('/spg/petacustomer', {
                templateUrl: 'asset/partial/spg/home/petacustomer.html',
                controller: 'HomeController'
            }).
            when('/spg/absensi', {
                templateUrl: 'asset/partial/spg/home/absensi.html',
                controller: 'HomeController'
            }).
            when('/spg/profile', {
                templateUrl: 'asset/partial/spg/home/profile.html',
                controller: 'HomeController'
            }).
            
            when('/spg/produk', {
                templateUrl: 'asset/partial/spg/home/produk.html',
                controller: 'HomeController'
            }).
            when('/spg/penjualanharian', {
                templateUrl: 'asset/partial/spg/home/penjualanharian.html',
                controller: 'HomeController'
            }).
            when('/spg/penjualanbulanan', {
                templateUrl: 'asset/partial/spg/home/penjualanbulanan.html',
                controller: 'HomeController'
            }).
            when('/spg/penjualantahunan', {
                templateUrl: 'asset/partial/spg/home/penjualantahunan.html',
                controller: 'HomeController'
            }).







            when('/chatting', {
                templateUrl: 'asset/partial/salesman/chatting.html',
                controller: 'ChattingController'
            }).
            when('/faq', {
                templateUrl: 'asset/partial/salesman/faq.html',
                controller: 'FaqController'
            }).
            when('/tips', {
                templateUrl: 'asset/partial/salesman/tips.html',
                controller: 'TipsController'
            }).

            when('/setting', {
                templateUrl: 'asset/partial/salesman/setting.html',
                controller: 'SettingController'
            }).
            otherwise({
                redirectTo: '/'
            });
    }]);

