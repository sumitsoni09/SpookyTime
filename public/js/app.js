const app = angular.module('HauntedApp',[])

app.controller('MainController', ['$http', function($http){

  const controller = this;

  this.deletePlace = function(place){
    $http({
      method: 'DELETE',
      url: '/places/' + place._id
    }).then(function(response){
      controller.getPlaces();
    },
    function(error)
  )
  }











}])
