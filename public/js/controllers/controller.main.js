angular.module ('forcastingController',['smart-table'])

.controller('mainController',['$scope','$http','forcasting',function($scope,$http,forcasting){
    $scope.formData = {};
    $scope.loading = true;
    forcasting.get().success(function(data){
        console.log(data);
        $scope.rowCollection=data;                
        $scope.loading = false;

        $scope.displayCollection = [].concat($scope.rowCollection);

        $scope.predicates = ['Vendor Nbr', 'Buyer Full Name', 'Store Nbr', 'Item Nbr', 'Item Desc 1','Item Type','Item Retail','Total Retai'];
        $scope.selectedPredicate = $scope.predicates[0];

    });
}]);

// var forcasting = angular.module('forcasting', ['smart-table']);


//    forcasting.controller('mainController', ['$scope', function ($scope) {
//     $scope.rowCollection = [
//         {firstName: 'Laurent', lastName: 'Renard', birthDate: new Date('1987-05-21'), balance: 102, email: 'whatever@gmail.com'},
//         {firstName: 'Blandine', lastName: 'Faivre', birthDate: new Date('1987-04-25'), balance: -2323.22, email: 'oufblandou@gmail.com'},
//         {firstName: 'Francoise', lastName: 'Frere', birthDate: new Date('1955-08-27'), balance: 42343, email: 'raymondef@gmail.com'}
//     ];
// }]);