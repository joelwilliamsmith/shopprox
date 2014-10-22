angular.module('shopprox', [])
  .controller('ShopproxController', ['$scope', function($scope) {

    $scope.total = 0;
    $scope.values = [5, 1, 0.5];
    $scope.add = function(val) {
        $scope.total+=val;
    };
    $scope.remove = function(val) {
        if($scope.total >= val) {
            $scope.total-=val;
        }
    };
    $scope.reset = function() {
        $scope.total = 0;
    };
    $scope.theme = "theme" + (Math.floor(Math.random() * 5) + 1);
}]);