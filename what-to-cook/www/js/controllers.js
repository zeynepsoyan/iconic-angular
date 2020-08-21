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

.controller('PlaylistsCtrl', function($scope, $stateParams) {
  $scope.recipes = [
    { title: 'Ezogelin Çorbası', category: "Çorba", ingredients: [{name: "Mercimek", amount: "100 gr", kcal: 23}, {name: "Nohut", amount: "100 gr", kcal: 23}], how: "do this", totalkcal: 234, logo: "https://im.haberturk.com/2020/07/22/ver1595393591/2751430_414x414.jpg", id:0 },
    { title: 'Kelle Paça Çorbası', category: "Çorba", ingredients: [{name: "Mercimek", amount: "100 gr", kcal: 23}], how: "do this", totalkcal: 234, logo: "https://harbiyiyorum.com/wp-content/uploads/kelle-corbasi.jpg", id:1 },
    { title: 'Yayla Çorbası', category: "Çorba", ingredients: [{name: "Mercimek", amount: "100 gr", kcal: 23}], how: "do this", totalkcal: 234, logo: "https://cdn.yemek.com/mncrop/940/625/uploads/2014/06/yayla-corbasi-yemekcom.jpg", id: 2 },
    { title: 'Patlıcan Musakka', category: "Etli Yemekler", ingredients: [{name: "Mercimek", amount: "100 gr", kcal: 23}], how: "do this", totalkcal: 234, logo: "https://cdn.yemek.com/mncrop/313/280/uploads/2019/04/firindamusakka-yeni.jpg", id: 3 },
    { title: 'İzmir Köfte', category: "Etli Yemekler", ingredients: [{name: "Mercimek", amount: "100 gr", kcal: 23}], how: "do this", totalkcal: 234, logo: "https://lezzet.blob.core.windows.net/images-xxlarge-recipe/izmir_kofte-22742567-6176-4e66-945b-8b3499f98bb3.jpg", id: 4 },
    { title: 'İçli Köfte', category: "Etli Yemekler", ingredients: [{name: "Mercimek", amount: "100 gr", kcal: 23}], how: "do this", totalkcal: 234, logo: "https://i.sozcu.com.tr/wp-content/uploads/2019/04/03/iecrop/icli-kofte-shutterstock_1_1_1554316555-400x400.jpg", id: 5 },
    { title: 'Yaprak Sarma', category: "Zeytinyağlı", ingredients: [{name: "Mercimek", amount: "100 gr", kcal: 23}], how: "do this", totalkcal: 234, logo: "https://cdn.yemek.com/mncrop/313/280/uploads/2017/09/bulgurlu-yaprak-sarma-tarifi.jpg", id: 6 },
    { title: 'Enginar Dolması', category: "Zeytinyağlı", ingredients: [ {name: "enginar", amount: "6", kcal: 100},{name: "zeytinyağı", amount: "1 çay bardağı", kcal: 200}, {name: "pirinç", amount: "6 yemek kaşığı", kcal: 100}, {name: "dereotu", amount: "1 demet", kcal: 10}, {name: "taze nane", amount: "Yarım demet", kcal: 10}, {name: "yeşil soğan", amount: "Yarım demet", kcal: 10},  {name: "limonun suyu", amount: "1", kcal: 0}, {name: "tuz", amount: "2 çay kaşığı", kcal: 4}, {name: "karabiber", amount: "Yarım çay kaşığı", kcal: 0}, {name: "kuru nane", amount: "1 çay kaşığı", kcal: 0}, {name: "fesleğen", amount: "1 çay kaşığı", kcal: 0}], how: "Enginarların yapraklarını koparmamaya özen göstererek iç kısımlarını kaşıkla alın. İç harcı için, yemeklik doğradığınız soğanı zeytinyağında pembeleşinceye kadar kavurun. Yıkayıp süzdüğünüz pirinci ilave edip pirinçler şeffaflaşıncaya kadar kavurmaya devam edin. Üzerine ince ince kıydığınız dereotu, nane, yeşil soğan ve limon suyunu ilave edin. Toz şeker, tuz ve baharatlarla tatlandırıp pirinçler hafif yumuşayıncaya kadar pişirin. Enginarları yayvan bir tencereye alın. İçlerine pirinçli harçtan doldurun. Suyunu ilave edip kısık ateşte enginar yaprakları ve pirinçler iyice yumuşayıncaya kadar pişirin. Enginar dolmasını, fırında tavuk ile birlikte servis edebilirsiniz. Afiyet olsun.", totalkcal: 434, logo: "https://lezzet.blob.core.windows.net/images-xxlarge-recipe/izmir_usulu_enginar_dolmasi-19fbeaa7-24b3-48d3-932c-12e48d0a719c.jpg", id: 7 },
    { title: 'Kuru Kayısılı Kereviz', category: "Zeytinyağlı", ingredients: [{name: "Mercimek", amount: "100 gr", kcal: 23}], how: "do this", totalkcal: 234, logo: "https://lezzet.blob.core.windows.net/images-xxlarge-recipe/ayvali_kereviz-3279466a-ea63-42ee-b576-5940d0e62537.jpg", id: 8 },
    { title: 'Etli İncir Dolması', category: "Etli Yemekler", ingredients: [{name: "Mercimek", amount: "100 gr", kcal: 23}], how: "do this", totalkcal: 234, logo: "https://lezzet.blob.core.windows.net/images-xxlarge-recipe/kuru-incir-dolmasi-4698aafa-aa9a-4728-a0c5-67c049cb27dd.jpg", id: 9 },
    { title: 'Atom', category: "Meze", ingredients: [{name: "süzme yoğurt", amount: "2,5 su bardağı", kcal: 50},{name: "ezilmiş sarımsak", amount: "1 diş", kcal: 40}, {name: "kurutulmuş arnavut biberi", amount: "5 adet", kcal: 20}, {name: "tereyağı", amount: "3 yemek kaşığı", kcal: 90}, {name: "sıvı yağ", amount: "1 yemek kaşığı", kcal: 30}, {name: "tuz", amount: "1 çay kaşığı", kcal: 4}], how: "Bir kasede ezilmiş sarımsak, tuz ve süzme yoğurdu güzelce karıştırın. Ayrı bir tavada sıvı yağ ve tereyağını eritin. Kurutulmuş arnavut biberlerini doğrayın ve erittiğiniz sıvı yağ ve tereyağının içerisine aktarın. 3-4 dakika kadar yağın kızmasını bekledikten sonra ocaktan alın. Yoğurda servis tabağında kaşık yardımıyla şekil verin ve üzerine biberli yağ karışımını döküp sevdiklerinizle afiyetle tüketin.his", totalkcal: 234, logo: "https://cdn.yemek.com/mncrop/313/280/uploads/2018/06/atom-meze.jpg", id: 10 },
    { title: 'Fava', category: "Meze", ingredients: [{name: "ezilmiş sarımsak", amount: "1 diş", kcal: 23}], how: "do this", totalkcal: 234, logo: "https://philosokitchen.com/wp-content/uploads/2020/02/greek-fava-final-1-squared-HIGH-735x735.jpg", id: 11 },
    { title: 'Haydari', category: "Meze", ingredients: [{name: "Mercimek", amount: "100 gr", kcal: 23}], how: "do this", totalkcal: 234, logo: "https://www.196flavors.com/wp-content/uploads/2020/05/haydari-1-FP-500x500.jpeg",  id: 12 },
    { title: 'Havuç Tarator', category: "Meze", ingredients: [{name: "Mercimek", amount: "100 gr", kcal: 23}], how: "do this", totalkcal: 234, logo: "https://www.diyetasistan.com/files/besinler/havuc-tarator-kalori.jpg", id: 13 },
    { title: 'Acuka', category: "Meze", ingredients: [{name: "Mercimek", amount: "100 gr", kcal: 23}], how: "do this", totalkcal: 234, logo: "https://cdn.yemek.com/mncrop/313/280/uploads/2015/11/acuka-tarifi.jpg", id: 14 },
  ];

  
  if($stateParams.recipeNo){

    $scope.info = $scope.recipes[$stateParams.recipeNo];

  }


})


.controller('PlaylistCtrl', function($scope, $stateParams) {
});
