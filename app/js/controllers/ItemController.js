// IIFE 

(function() {
    
    // 2/3 - define the eventsApp module. It's important to pass the [] which tells angular that the module is defined here,
    // otherwise, angular will think that this is a reference to a module that is defined elsewhere.
    
    bidderApp = angular.module("bidderApp");
    
    var ItemController = function($scope) {
        
        $scope.event = {
          name: 'Bidder Customer'  
        };
        
    };
    
    // 3/3 - now, register the module
    //  This tells the controller that this is the ItemController and ItemController is the function to use...
    bidderApp.controller("ItemController", ["$scope", ItemController]);
    
})();