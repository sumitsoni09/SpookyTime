const app = angular.module('HauntedApp',[])

app.controller('MainController', ['$http', function($http){
  const controller = this;
  this.showEditForm = false;
  this.showModal = false;
  this.indexOfModalToShow = 1;
  this.places = '';
  this.place = '';


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
    }, error => {
      console.log(error);
    })
  }

  // this.showPlace = function(place){
  //
  //   $http({
  //     method: 'GET',
  //     url: '/places' + place._id,
  //     data: {
  //       name: this.name,
  //       image: this.image,
  //       description: this.description,
  //       id: this.id
  //     }
  //   }).then( response => {
  //     // place.name = response.data.name;
  //     // place.image = response.data.image;
  //     // place.description = response.data.description;
  //
  //     console.log('i am data from showPlace' + response.data);
  //   }, error => {
  //     console.log(error);
  //   })
  // }



  this.toggleModal = (place) => {
    this.showModal = !this.showModal;

    // this.place = place
    // console.log(place);
    // this.showPlace();

    $http({
      method: 'GET',
      url: '/places/' + place._id,
      data: {
        name: place.name,
        image: place.image,
        description: place.description,
        id: place._id
      }
    }).then(function(response){
      // this.places = response.data
      // this.place = this.places
      // this.place = response.data
      // this.showPlace(place);
      this.name = response.data.name;
      this.image = response.data.image;
      this.description = response.data.description;
      this.id = response.data._id
      console.log(response.data);
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
        description: this.updatedDescription
      }
    }).then((response)=> {
      this.getPlaces();
      this.showEditForm = null;
    }, (err)=> {
      console.log(err)
    })

  }


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


  this.$indexOfEditFormToShow = 1;

  this.toggleShowEditForm = (place) => {
    this.showEditForm = !this.showEditForm
  }

  this.getPlaces();



}])
