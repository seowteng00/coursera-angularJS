(function () {
	'use strict';

	angular.module('LunchCheck', [])
	.controller('LunchCheckController', LunchCheckController);

	LunchCheckController.$inject = ['$scope'];
	function LunchCheckController($scope) {
		$scope.items = "";
		$scope.message = "";
		$scope.color = "";
		
		$scope.checkLunch = function () {
			var items = $scope.items.split(",");

			if (items.length > 3) {
				$scope.message = "Too much!";
				$scope.color = "{ 'color': 'green' }";
				console.log($scope.color);

			} else if (items[0] === "" && items.length === 1) {
				$scope.message = "Please enter data first";
				$scope.color = "{ 'color': 'red' }";
			} else {
				$scope.message = "Enjoy!";
				$scope.color = "{ 'color': 'green' }";
			}
		}
	}
})();