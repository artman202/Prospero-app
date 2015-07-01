angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $cordovaSocialSharing) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });  

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };

  $scope.shareNative = function() {
    $cordovaSocialSharing
    .share("hello", null, null, null) // Share via native share sheet
    .then(function(result) {
      // Success!
    }, function(err) {
      console.log("There was an error");
    });
  };

  $scope.logo = '<img class="header-logo" src="images/prospero-logo.png"/>'

  $scope.share = '<a class="share-icon" ng-click="shareNative()"><i class="icon ion-share"></i></a>'

  $scope.services = [
    {serviceIcon:"images/icon-dev.svg",serviceName:"DEVELOPMENT",serviceDesc:"By creating user-friendly designs that specifically focus on the customer’s brand, we are able to create a website that suits their needs. We produce websites that are easy-to-navigate and which load quickly. Our experienced website designers can create a website ‘look and feel’ for your brand which will attract potential customers to your brand and showcase your brands image in a professional manner. Once we have completed your website and it is displayed on the Internet we will constantly create new content and designs for your website ensuring that your website evolves with the current trends."},
    {serviceIcon:"images/icon-dev.svg",serviceName:"DESIGN & UX",serviceDesc:"We are capable of using our skills in multimedia to boost your company’s visual appeal. By creating videos that entice the viewers to think, pictures that make them read or audio that gives them chills we can make your company more appealing to different people. By having a great multimedia design your company has the opportunity to invite certain demographics of people that normal web design cannot. With videos that are released on YouTube and visual ads that show up on specific users browsers we increase the amount of people that see your website."},
    {serviceIcon:"images/icon-dev.svg",serviceName:"SUPPORTING SERVICES",serviceDesc:"Most businesses will spend their entire budget on the design of a website without making sure that it can work properly. This means that their website might look great but they lack good content and the website is plagued by constant failures. Outsourcing the supportive services of your website to Prospero ensures that quality content is regularly uploaded and that an experienced team can fix any bugs on your website. We use an effective Content Management System that will ensure that your workflow is as smooth as possible."},
    {serviceIcon:"images/icon-dev.svg",serviceName:"BRANDING",serviceDesc:"Your brand represents what your company does, how it looks and what you hope to accomplish. By having your company’s name on a bottle or your logo on a flag the awareness of your company will spread. This means that your branding has to be at the right place at the right time to reach the perfect audience. We can create a specific style that accompanies your branding; this will make everything your company is involved in immediately recognisable by your clients and respective clients. By meeting with you and making the perfect Corporate Identity we will make sure that your branding is spread throughout your target market and that everyone that sees your branding will be enticed to use your product or service."},
    {serviceIcon:"images/icon-dev.svg",serviceName:"MOBILE",serviceDesc:"Smartphones have enabled the entire world to easily access large amounts of data. This means that people want to be able to access information easier and faster every day. To make things easier users install apps and games on their phones, which allow them to find everything, they want easily and without too much hassle. One of the best ways to interact with anyone on a mobile platform is to make something that can work on their preferred devices. If this is something entirely foreign to you there is an easy solution. We can make mobile friendly websites, mobile apps and mobile games that allow users to have easy access to your content and it allows you to have one less burden on your shoulder."}
  ];

  var servArray = $scope.services;
  $scope.servChosenObject = null;
  $scope.servName = function(data) {
    for (x = 0; x < servArray.length; x++) {
      if (servArray[x].serviceName == data) {
        $scope.servChosenObject = servArray[x];
      } else {}
    }
  }

})

.controller('HomeCtrl', function($scope) {
  
})

.controller('ServSingCtrl', function($scope) {

})