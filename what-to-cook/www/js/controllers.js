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
  $scope.recipes = [
    { title: 'Ezogelin Çorbası', category: "Çorba", logo: "https://im.haberturk.com/2020/07/22/ver1595393591/2751430_414x414.jpg", phone: "444", website: "www.com", id: 0 },
    { title: 'Kelle Paça Çorbası', category: "Çorba", logo: "https://harbiyiyorum.com/wp-content/uploads/kelle-corbasi.jpg", phone: "444", website: "www.com", id: 1 },
    { title: 'Yayla Çorbası', category: "Çorba", logo: "https://cdn.yemek.com/mncrop/940/625/uploads/2014/06/yayla-corbasi-yemekcom.jpg", phone: "444", website: "www.com", id: 2 },
    { title: 'Patlıcan Musakka', category: "Etli Yemekler", logo: "https://cdn.yemek.com/mncrop/313/280/uploads/2019/04/firindamusakka-yeni.jpg", phone: "444", website: "www.com", id: 3 },
    { title: 'İzmir Köfte', category: "Etli Yemekler", logo: "https://lezzet.blob.core.windows.net/images-xxlarge-recipe/izmir_kofte-22742567-6176-4e66-945b-8b3499f98bb3.jpg", phone: "444", website: "www.com", id: 4 },
    { title: 'İçli Köfte', category: "Etli Yemekler", logo: "https://i.sozcu.com.tr/wp-content/uploads/2019/04/03/iecrop/icli-kofte-shutterstock_1_1_1554316555-400x400.jpg", phone: "444", website: "www.com", id: 5 },
    { title: 'Yaprak Sarma', category: "Zeytinyağlı", logo: "https://cdn.yemek.com/mncrop/313/280/uploads/2017/09/bulgurlu-yaprak-sarma-tarifi.jpg", phone: "444", website: "www.com", id: 6 },
    { title: 'Limon Kabuklu Kabak', category: "Zeytinyağlı", logo: "https://www.antepsofrasi.com/wp-content/uploads/2016/01/Zeytinya%C4%9Fl%C4%B1-T%C3%BCrl%C3%BC-580x510.jpg", phone: "444", website: "www.com", id: 7 },
    { title: 'Enginar Dolması', category: "Zeytinyağlı", logo: "https://lezzet.blob.core.windows.net/images-xxlarge-recipe/izmir_usulu_enginar_dolmasi-19fbeaa7-24b3-48d3-932c-12e48d0a719c.jpg", phone: "444", website: "www.com", id: 8 },
    { title: 'Kuru Kayısılı Kereviz', category: "Zeytinyağlı", logo: "https://lezzet.blob.core.windows.net/images-xxlarge-recipe/ayvali_kereviz-3279466a-ea63-42ee-b576-5940d0e62537.jpg", phone: "444", website: "www.com", id: 9 },
    { title: 'Etli İncir Dolması', category: "Etli Yemekler", logo: "https://lezzet.blob.core.windows.net/images-xxlarge-recipe/kuru-incir-dolmasi-4698aafa-aa9a-4728-a0c5-67c049cb27dd.jpg", phone: "444", website: "www.com", id: 10 },
    { title: 'Atom', category: "Meze", logo: "https://cdn.yemek.com/mncrop/313/280/uploads/2018/06/atom-meze.jpg", phone: "444", website: "www.com", id: 11 },
    { title: 'Fava', category: "Meze", logo: "https://philosokitchen.com/wp-content/uploads/2020/02/greek-fava-final-1-squared-HIGH-735x735.jpg", phone: "444", website: "www.com", id: 12 },
    { title: 'Haydari', category: "Meze", logo: "https://www.196flavors.com/wp-content/uploads/2020/05/haydari-1-FP-500x500.jpeg", phone: "444", website: "www.com", id: 13 },
    { title: 'Havuç Tarator', category: "Meze", logo: "https://www.diyetasistan.com/files/besinler/havuc-tarator-kalori.jpg", phone: "444", website: "www.com", id: 14 },
    { title: 'Acuka', category: "Meze", logo: "https://cdn.yemek.com/mncrop/313/280/uploads/2015/11/acuka-tarifi.jpg", phone: "444", website: "www.com", id: 15 },
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
