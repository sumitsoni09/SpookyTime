const app = angular.module('HauntedApp',[])

app.controller('MainController', ['$http', function($http){
  const controller = this;

  this.showModal = false;
  this.showCreateModal = false;
  this.places = '';
  this.place = '';
  this.createForm = {};

  this.indexOfEditFormToShow = 1;
  // TOGGLE THE EDIT MODAL
  this.toggleShowEditForm = (place) => {
    this.place = place;
    this.showEditForm = !this.showEditForm
  }
  this.toggleShowNewForm = (place) => {
    this.showNewForm = !this.showNewForm
  }
  // TOGGLE THE ADD NEW MODAL
  this.toggleCreatePlace = () => {

    this.showCreateModal = !this.showCreateModal
  }
  // TOGGLE THE SHOW DETAILS MODAL
  this.showOnePlace = place => {
    this.place = place;
    this.showModal = !this.showModal;
  }

  // this.test = 'hello';

  // create new haunted place
  this.createPlace = function() {
    $http({
      method: 'POST',
      url: '/places',
      data: this.createForm
    }).then(function(response){
      controller.places.push(response.data);
      controller.createForm = {};
      this.ShowNewForm = null;
      // controller.getPlaces()
    }, error => {
      console.log(error);
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

  //update haunted place
  this.editPlace = function(place){
    console.log('the edit function is running');
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
      // this.showEditForm = null;
    }, (err)=> {
      console.log(err)
    })

  }
  this.showEditForm = false;
  this.getPlaces();

}])

app.controller('AuthController', ['$http', function($http){

  this.toggleShowCreateUser = false;
  this.toggleShowLogIn = false;
  const controller = this

  this.createUser = function(){
    $http({
      method: 'POST',
      url:'/users',
      data: {
        username: this.username,
        password: this.password
      }
    }).then(function(response){
      this.showCreateUser = null
      console.log(response)
    })
  }

  this.logIn = function(){
    $http({
      method: 'POST',
      url: '/sessions',
      data: {
        username: this.username,
        password: this.password
      }
    }).then(function(response){
      this.showLogIn = null
      console.log(response)
    })
  }

  this.goApp = function(){
    $http({
      method: 'GET',
      url: '/app'
    }).then(function(response){
    console.log("hello")
    controller.loggedInUsername = response.data.username
    })
  }
  this.$indexOfUserFormToShow = 1;
  this.toggleShowCreateUser = () => {
    this.showCreateUser = !this.showCreateUser
  }

  this.$indexOfLogInFormToShow = 1;
  this.toggleShowLogIn = () => {
    this.showLogIn = !this.showLogIn
  };

}])


app.controller('StoreController', ['$http', function($http){
  const controller = this;
  this.includePath = 'partials/store.html';
  this.changeInclude = (path) => {
  this.includePath = 'partials/'+ path + '.html';
  }

  this.createStore = function() {
    $http({
      method: 'POST',
      url: '/store',
      data: this.createStore
    }).then(function(response){
      controller.store.push(response.data);
      controller.createStore = {};
    }, error => {
      console.log(error);
    })
  }


  this.getStore = function(){
    $http({
      method: 'GET',
      url: '/store'
    }).then(function(response){
      console.log(response.data);
      controller.store = response.data
    }, error => {
      console.log(error);
    })
  }
  // this.getStore();

  this.deleteStore = function(store){
    $http({
      method: 'DELETE',
      url: '/store/' + store._id
    }).then(function(response){
      controller.getStore();
    }, function(error){
      console.log(error);
    })
  }

  //update haunted place
  this.editPlace = function(place){
    $http({
      method: 'PUT',
      url: '/store/' + store._id,
      data: {
        name: this.updatedName,
        price: this.updatedPrice,
        image: this.updatedImage,
        description: this.updatedDescription
      }
    }).then((response)=> {
      this.getStore();
    }, (err)=> {
      console.log(err)
    })

  }

  this.getStore();




}])
