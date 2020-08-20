angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

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
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.companies = [
    { title: 'Polis', category: "Acil", logo: "https://thgtr.com/wp-content/uploads/2010/04/tcpolis-logo3r.jpg", phone: "444", website: "www.com", id: 0 },
    { title: 'Ambulans', category: "Acil", logo: "https://g7.pngresmi.com/preview/186/464/838/american-red-cross-logo-clip-art-ambulance-thumbnail.jpg", phone: "444", website: "www.com", id: 1 },
    { title: 'Orman Genel Müdürlüğü', category: "Acil", logo: "https://www.aniyuzuk.com/orman-genel-mudurlugu-ogm-cuzdan-rozeti-orman-ve-su-isleri-bakanligi-rozetleri-18768-83-B.jpg", phone: "444", website: "www.com", id: 2 },
    { title: 'Akbank', category: "Banka", logo: "https://www.akbank.com/SiteAssets/img/akbfa.jpg", phone: "444", website: "www.com", id: 3 },
    { title: 'YapıKredi', category: "Banka", logo: "https://pbs.twimg.com/profile_images/1193635264868110337/kxcZFgfk_400x400.jpg", phone: "444", website: "www.com", id: 4 },
    { title: 'QNB Finansbank', category: "Banka", logo: "https://www.intercom.com.eg/wp-content/uploads/2017/12/QNB-300x300.jpg", phone: "444", website: "www.com", id: 5 },
    { title: 'Koç Üniversitesi', category: "Üniversite", logo: "https://media-exp1.licdn.com/dms/image/C560BAQGyhJ55R4sBJQ/company-logo_200_200/0?e=2159024400&v=beta&t=7wlMQaUDMzUk9O82X9YFSTfy68vK1pbM86WvWqbx4ng", phone: "444", website: "www.com", id: 6 },
    { title: 'İstanbul Teknik Üniversitesi', category: "Üniversite", logo: "https://www.airporthaber.com/wk-uploads/news/it2_1.jpg", phone: "444", website: "www.com", id: 7 },
    { title: 'Yaşar Üniversitesi', category: "Üniversite", logo: "https://media-exp1.licdn.com/dms/image/C510BAQGZDcY3U5F6WQ/company-logo_200_200/0?e=2159024400&v=beta&t=0bLbV-9khkMw1TEDBHJSVCn7xiyyztvYE2mUJAbGHFs", phone: "444", website: "www.com", id: 8 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
