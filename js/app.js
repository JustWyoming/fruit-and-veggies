/* setup your angular app here */
var fruityVeg = angular.module('FruityVeg', []);

//debug stuff to show the app is loading and fruit / veggies are available
fruityVeg.run(function(){
    console.log('App loaded');
});

  var random = function() {
        return 0.5 - Math.random();
    }

fruityVeg.controller('FruitVegList', ['$scope', function($scope){
   console.log("is this working");
   var all = fruit.concat(vegetables).sort(random);
   $scope.items = all;
   $scope.fruits = [];
   $scope.veggies = [];

    $scope.moveLeft = function(index){
        $scope.fruits.push($scope.items[index]);
        $scope.items.splice(index,1);
    }

     $scope.moveRight = function(index){
        $scope.veggies.push($scope.items[index]);
        $scope.items.splice(index,1);
    }

     $scope.returnRight = function(index){
        $scope.items.push($scope.fruits[index]);
        $scope.fruits.splice(index,1);
    }

     $scope.returnLeft = function(index){
        $scope.items.push($scope.veggies[index]);
        $scope.veggies.splice(index,1);
    }



}]);

