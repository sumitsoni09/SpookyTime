const app = angular.module('HauntedApp',[])

app.controller('MainController', ['$http', function($http){

  const controller = this;


  this.createPlace = function() {
    $http({
      method: 'POST',
      url: '/places',
      data: {
        name: this.name,
        location: this.location,
        image: this.image,
        description: this.description
      }
    }).then(function(response){
      controller.getPlaces()
    })
  }

  // show all haunted places
  this.getPlaces = function(){
    $http({
      method: 'GET',
      url: '/places'
    }).then(function(response){
      controller.places = response.data
      // this.places = response.data
    }, error => {
      console.log(error);
    })
  }


  //update haunted place
  this.editPlace = function(place){
    $http({
      method: 'PUT',
      url: '/places/' + place._id,
      data: {
        name: this.updatedName,
        location: this.updatedLocation,
        image: this.updatedImage,
      }
    }).then(function(response){
      controller.getPlaces();
    })

  }
  this.indexOfEditFormToShow = 1;
  this.getPlaces();



  this.deletePlace = function(place){
    $http({
      method: 'DELETE',
      url: '/places/' + place._id
    }).then(function(response){
      controller.getPlaces();
    }, function(error){
      console.log(error);
    })
  }



  this.getPlaces();



}])
