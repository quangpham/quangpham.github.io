angular.module('templates-app', ['article.tpl.html', 'browse.tpl.html', 'feedback.tpl.html', 'help.tpl.html', 'helpvideo.tpl.html', 'home.tpl.html', 'menu.tpl.html', 'product.tpl.html']);

angular.module("article.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("article.tpl.html",
    "<div class=\"article-page\"><ion-header-bar class=\"bar-sd-header\"><div class=\"buttons\"><button class=\"button-icon ion-ios7-arrow-back button back-button disable-user-behavior\" ng-click=\"$$goBack()\"></button></div><h1 class=\"title\">{{article.title}}</h1></ion-header-bar><ion-content has-header=\"true\"><div class=\"photo-tags\" style=\"width:{{documentWidth}}px;height:{{documentWidth/article.image.aspect_ratio}}px;background-image:url({{article.image.url}})\"><a class=\"button button-icon icon ion-help tag\" ng-repeat=\"tag in article.image.tags\" style=\"{{tag.style}}\" ng-click=\"$$webviewSendData({'action':'visualizeProduct','parentMenu': '{{$stateParams.menuId}}','product':{'id':tag.productId}})\"></a></div><div class=\"card\"><div class=\"item item-text-wrap\" ng-bind-html=\"article.content\"></div></div></ion-content></div>");
}]);

angular.module("browse.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("browse.tpl.html",
    "<div class=\"browse-page\"><ion-header-bar class=\"bar-sd-header\"><div class=\"buttons\"><button class=\"button-icon ion-ios7-arrow-back button back-button disable-user-behavior\" ng-click=\"$$webviewClose()\"></button></div><h1 class=\"title\">BROWSE</h1></ion-header-bar><ion-content has-header=\"true\" on-scroll-complete=\"onScrollComplete()\" id=\"browse-scroll-content\"><ul class=\"list product-menu\" bindonce=\"products\"><li class=\"\" ng-repeat=\"product in products\" ng-click=\"$$webviewSendData({'action':'changeProduct','product':{'id':product.id}})\"><div class=\"thumb-bg\" bo-data-bg-img=\"product['thumbnail-image']\" bo-data-id=\"$index\"></div><div class=\"box row row-center\"><div class=\"col text\" bo-html=\"product.name\"></div></div></li></ul></ion-content></div>");
}]);

angular.module("feedback.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("feedback.tpl.html",
    "<div class=\"feedback-carousel-page\"><ion-header-bar class=\"bar-sd-header\"><div class=\"buttons\"><button class=\"button-icon ion-ios7-arrow-back button back-button disable-user-behavior\" ng-click=\"$$slideMenuToggleLeft()\"></button></div><h1 class=\"title\">Feedback</h1></ion-header-bar><ion-content has-header=\"true\"><div class=\"list padding\"><label class=\"item item-input\"><input type=\"text\" placeholder=\"Name\" ng-model=\"feedback.name\"></label><label class=\"item item-input\"><input type=\"text\" placeholder=\"Phone number (optional)\" ng-model=\"feedback.phone\"></label><label class=\"item item-input\"><input type=\"text\" placeholder=\"Email address (optional)\" ng-model=\"feedback.email\"></label><label class=\"item item-input\"><textarea placeholder=\"Your feedback\" style=\"margin-top: 0px; margin-bottom: 0px; height: 252px\" ng-model=\"feedback.feedback\"></textarea></label></div><div class=\"row\"><div class=\"col col-50\"><button class=\"button button-block button-assertive\" ng-click=\"$$goToState('home')\">Cancel</button></div><div class=\"col col-50\"><button class=\"button button-block button-stable\" ng-click=\"send()\">Submit</button></div></div></ion-content></div>");
}]);

angular.module("help.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("help.tpl.html",
    "<div class=\"help-carousel-page\"><ion-content scroll=\"false\" style=\"padding:10%\" bindonce=\"webConfig\"><div class=\"help-carousel carousel-background-image\"><ul rn-carousel rn-carousel-indicator rn-carousel-index=\"currentCarouselIndex\"><li ng-repeat=\"page in webConfig.carousel\"><div class=\"image\" bo-bg-img-server=\"page.image\"></div><div class=\"row row-center\"><div class=\"col text\" bo-html=\"page.text\"></div></div></li></ul></div><div class=\"row\"><div class=\"col col-50 col-offset-25\"><button ng-click=\"$$goBack()\" class=\"button button-block\" ng-bind=\"currentCarouselIndex == webConfig.carousel.length-1 ? 'Done' : 'Close'\"></button></div></div></ion-content></div>");
}]);

angular.module("helpvideo.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("helpvideo.tpl.html",
    "<div class=\"help-carousel-page\"><ion-content scroll=\"false\" bindonce=\"webConfig\"><div vimeo code=\"90870691\"></div></ion-content></div>");
}]);

angular.module("home.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home.tpl.html",
    "<div class=\"home-page\"><ion-header-bar class=\"bar-dark\"><div class=\"buttons\"><button class=\"button-icon ion-navicon button back-button disable-user-behavior\" ng-click=\"$$slideMenuToggleLeft()\"></button></div><h1 class=\"title\"><img class=\"sayduck-logo\" src=\"assets/images/sayduck_logo_white.png\"></h1></ion-header-bar><ion-content has-header=\"true\" bindonce=\"rowsData\"><div class=\"list-content\"><div class=\"row\" ng-repeat=\"level1_row in rowsData\" style=\"height:{{documentWidth*level1_row.height/100}}px\"><div ng-repeat=\"level1_col in level1_row.cols\" class=\"col col-{{level1_col.width}}\"><div class=\"thumb\" bo-bg-img-server=\"level1_col.image\" ng-if=\"level1_col.image\" ng-click=\"$$runAction(level1_col.action)\"></div><div ng-if=\"level1_col.rows\"><div class=\"row\" ng-repeat=\"level2_row in level1_col.rows\" style=\"height:{{documentWidth*level2_row.height/100}}px\"><div ng-repeat=\"level2_col in level2_row.cols\" class=\"col col-{{level2_col.width}}\"><div class=\"thumb\" bo-bg-img-server=\"level2_col.image\" ng-if=\"level2_col.image\" ng-click=\"$$runAction(level2_col.action)\"></div></div></div></div></div></div></div></ion-content></div>");
}]);

angular.module("menu.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("menu.tpl.html",
    "<div class=\"menu-page\"><ion-header-bar class=\"bar-sd-header\"><div class=\"buttons\"><button class=\"button-icon ion-ios7-arrow-back button back-button disable-user-behavior\" ng-click=\"goBack()\"></button></div><h1 class=\"title\">BROWSE</h1></ion-header-bar><ion-content has-header=\"true\" on-scroll-complete=\"onScrollComplete()\" id=\"browse-scroll-content\" bindonce=\"menuData\"><ul class=\"list sub-menu\" bo-if=\"menuData['sub-menus'].length > 0\"><li ng-repeat=\"menuItem in menuData['sub-menus']\" ng-click=\"goToMenu(menuItem.id)\"><div class=\"thumb-bg\" bo-bg-img-server=\"menuItem['thumbnail-image']\" ng-if=\"$stateParams.menuId =='root' \"></div><div class=\"thumb-bg\" bo-data-bg-img=\"menuItem['thumbnail-image']\" bo-data-id=\"$index\" ng-if=\"$stateParams.menuId !='root' \"></div></li></ul><ul class=\"list product-menu\" bo-if=\"menuData['products'].length > 0\"><li ng-repeat=\"product in menuData.products\" ng-click=\"$$webviewSendData({'action':'visualizeProduct','parentMenu': '{{$stateParams.menuId}}','product':{'id':product.id}})\"><div class=\"thumb-bg\" bo-data-bg-img=\"product['thumbnail-image']\" bo-data-id=\"$index\"></div><div class=\"box row row-center\"><div class=\"col text\" bo-html=\"product.name\"></div></div></li></ul></ion-content></div>");
}]);

angular.module("product.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("product.tpl.html",
    "<div class=\"product-page\" bindonce=\"product\"><ion-header-bar class=\"bar-sd-header\"><div class=\"buttons\"><button class=\"button-icon ion-ios7-arrow-back button back-button disable-user-behavior\" ng-click=\"$$webviewClose()\"></button></div><h1 class=\"title\">{{product.info.name}}</h1></ion-header-bar><ion-content has-header=\"true\"><div class=\"product-carousel carousel-background-image\" ng-if=\"(product.info.images.full.length > 1)\"><ul rn-carousel rn-carousel-indicator class=\"image\"><li ng-repeat=\"image in product.info.images.full\"><div class=\"image\" bo-bg-img-server=\"image\"></div></li></ul></div><div class=\"product-carousel\" ng-if=\"(product.info.images.full.length == 1)\"><div class=\"product-image-1\" bo-bg-img-server=\"product.info.images.full[0]\"></div></div><div class=\"action-button-bars\"><div class=\"icon ion-ios7-cart-outline\" ng-click=\"$$webviewSendData({'action':'openExternalWeb','url': product.info.buyNowURL})\" ng-if=\"product.info.buyNowURL\"></div><div class=\"icon ion-ios7-world-outline\" ng-click=\"$$webviewSendData({'action':'openExternalWeb','url': product.info.productURL})\" ng-if=\"product.info.productURL\"></div></div><div class=\"item item-text-wrap\" style=\"margin-top:15px;border:none\"><div ng-if=\"product.info.description\"><div ng-bind-html=\"product.info.description\"></div><br></div><div><ul><li ng-if=\"product.info.height\">Height: {{product.info.height}}</li><li ng-if=\"product.info.length\">Length: {{product.info.length}}</li><li ng-if=\"product.info.width\">Width: {{product.info.width}}</li><li ng-if=\"product.info.depth\">Depth: {{product.info.depth}}</li><li ng-if=\"product.info.diameter\">Diameter: {{product.info.diameter}}</li></ul><br></div><div ng-if=\"product.info.details\"><div ng-bind-html=\"product.info.details\"></div><br></div></div></ion-content></div>");
}]);

"use strict";
this.app = angular.module('sayduckapp', ['templates-app', 'ionic', 'angular-lodash', 'qp-common', 'sd-common', 'angular-carousel', 'qp-webviewjsbridge', 'pasvaz.bindonce']);

app.run([
  '$rootScope', 'QPWebviewUtils', '$ionicSideMenuDelegate', '$state', '$window', '$stateParams', function($rootScope, QPWebviewUtils, $ionicSideMenuDelegate, $state, $window, $stateParams) {
    $rootScope.$stateParams = $stateParams;
    $rootScope.$$webviewSendData = function(data) {
      return QPWebviewUtils.sendData(data);
    };
    $rootScope.$$webviewClose = function() {
      return QPWebviewUtils.closewebview();
    };
    $rootScope.$$goBack = function() {
      if ($window.history.length === 1) {
        return $state.go("home");
      } else {
        return $window.history.back();
      }
    };
    $rootScope.$$runAction = function(action) {
      switch (action.type) {
        case "menu":
          return $state.go("menu", {
            menuId: action.menuId
          });
        case "ar":
          return QPWebviewUtils.sendData({
            action: "sayduckScan"
          });
        case "article":
          return $state.go("article", {
            articleID: action.articleId
          });
      }
    };
    $rootScope.$$goToState = function(stateName, stateParams) {
      if (!stateParams) {
        stateParams = {};
      }
      $state.go(stateName, stateParams);
      return $ionicSideMenuDelegate.toggleLeft(false);
    };
    return $rootScope.$$slideMenuToggleLeft = function() {
      return $ionicSideMenuDelegate.toggleLeft();
    };
  }
]);

app.controller('SDArticleCtrl', [
  '$scope', '$stateParams', 'SDRESTService', function($scope, $stateParams, SDRESTService) {
    var init;
    $scope.documentWidth = SayduckSettings.documentWidth;
    init = function() {
      return SDRESTService.getWebConfig().then(function(data) {
        return angular.forEach(data.articles, function(article) {
          if (article.id === $stateParams.articleID) {
            $scope.article = article;
          }
        });
      });
    };
    return init();
  }
]);

app.controller('SDBrowseCtrl', [
  '$scope', '$stateParams', 'SDRESTService', 'SDScrollViewUtils', '$ionicLoading', '$timeout', '$state', function($scope, $stateParams, SDRESTService, SDScrollViewUtils, $ionicLoading, $timeout, $state) {
    var init;
    $scope.svU = SDScrollViewUtils('#browse-scroll-content', 86);
    $scope.onScrollComplete = function() {
      return $scope.svU.loadImagesInViewport();
    };
    init = function() {
      var menuArr;
      switch ($state.current.name) {
        case "browse":
          return SDRESTService.getProductsInMarker($stateParams.markerID).then(function(data) {
            $scope.products = data.products;
            return $scope.svU.loadBackgroundImagesForFirstTime();
          });
        case "dynamic_marker_browse":
          menuArr = $stateParams.menuId.split(",");
          return SDRESTService.getMenu(_.last(menuArr)).then(function(data) {
            $scope.products = data.products;
            return $scope.svU.loadBackgroundImagesForFirstTime();
          });
      }
    };
    return $timeout((function() {
      return init();
    }), 100);
  }
]);

app.controller('SDFeedbackCtrl', [
  '$scope', 'SDFeedbackService', '$state', function($scope, SDFeedbackService, $state) {
    $scope.feedback = {};
    return $scope.send = function() {
      var feedback;
      feedback = new SDFeedbackService($scope.feedback);
      return feedback.$save(function(savedFeedback) {
        return $state.go('home');
      });
    };
  }
]);

app.controller('SDHelpCtrl', [
  '$scope', '$stateParams', 'SDRESTService', '$timeout', function($scope, $stateParams, SDRESTService, $timeout) {
    var init;
    $scope.currentCarouselIndex = 0;
    init = function() {
      return SDRESTService.getWebConfig().then(function(data) {
        return $scope.webConfig = data;
      });
    };
    return $timeout((function() {
      return init();
    }), 100);
  }
]);

app.controller('SDHelpVideoCtrl', [
  '$scope', '$stateParams', 'SDRESTService', '$timeout', function($scope, $stateParams, SDRESTService, $timeout) {
    var init;
    $scope.currentCarouselIndex = 0;
    init = function() {
      return SDRESTService.getWebConfig().then(function(data) {
        return $scope.webConfig = data;
      });
    };
    return $timeout((function() {
      return init();
    }), 100);
  }
]);

app.controller('SDHomeCtrl', [
  '$scope', '$stateParams', 'SDRESTService', '$ionicSideMenuDelegate', '$timeout', function($scope, $stateParams, SDRESTService, $ionicSideMenuDelegate, $timeout) {
    var init;
    $scope.documentWidth = SayduckSettings.documentWidth;
    $scope.rowsLimit = 2;
    init = function() {
      return SDRESTService.getWebConfig().then(function(data) {
        return $scope.rowsData = data.home.rows;
      });
    };
    return $timeout((function() {
      return init();
    }), 100);
  }
]);

app.controller('SDMenuCtrl', [
  '$scope', '$state', '$stateParams', 'SDRESTService', 'SDScrollViewUtils', 'QPWebviewUtils', function($scope, $state, $stateParams, SDRESTService, SDScrollViewUtils, QPWebviewUtils) {
    var init;
    $scope.svU = SDScrollViewUtils('#browse-scroll-content', 86);
    $scope.goBack = function() {
      var menuArr;
      if ($state.current.name === "browse_with_product") {
        return QPWebviewUtils.closewebview();
      } else {
        menuArr = $stateParams.menuId.split(",");
        if (menuArr.length > 1) {
          menuArr.pop();
          return $state.go('menu', {
            menuId: menuArr.join()
          });
        } else {
          return $state.go('home');
        }
      }
    };
    $scope.onScrollComplete = function() {
      return $scope.svU.loadImagesInViewport();
    };
    $scope.goToMenu = function(menuItem) {
      return $state.go('menu', {
        menuId: $stateParams.menuId + ',' + menuItem
      });
    };
    init = function() {
      if ($stateParams.menuId === 'notroot') {
        $state.go('home');
      } else {
        $scope.menuArr = $stateParams.menuId.split(",");
        return SDRESTService.getMenu(_.last($scope.menuArr)).then(function(menuData) {
          $scope.menuData = menuData;
          return $scope.svU.loadBackgroundImagesForFirstTime();
        });
      }
    };
    return init();
  }
]);

app.controller('SDProductCtrl', [
  '$scope', '$stateParams', 'SDRESTService', function($scope, $stateParams, SDRESTService) {
    var init;
    init = function() {
      return SDRESTService.getProduct($stateParams.productID).then(function(product) {
        return $scope.product = product;
      });
    };
    return init();
  }
]);

app.config([
  '$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $stateProvider.state("home", {
      url: "/:mode/home",
      controller: "SDHomeCtrl",
      templateUrl: "home.tpl.html"
    });
    $stateProvider.state("help", {
      url: "/:mode/help?firsttime",
      controller: "SDHelpCtrl",
      templateUrl: "help.tpl.html"
    });
    $stateProvider.state("helpvideo", {
      url: "/:mode/helpvideo?firsttime",
      controller: "SDHelpVideoCtrl",
      templateUrl: "helpvideo.tpl.html"
    });
    $stateProvider.state("startpage", {
      url: "/:mode/startpage",
      controller: "SDHelpCtrl",
      templateUrl: "help.tpl.html"
    });
    $stateProvider.state("product", {
      url: "/:mode/product/:productID",
      controller: "SDProductCtrl",
      templateUrl: "product.tpl.html"
    });
    $stateProvider.state("menu", {
      url: "/:mode/menu/:menuId?productID",
      controller: "SDMenuCtrl",
      templateUrl: "menu.tpl.html"
    });
    $stateProvider.state("feedback", {
      url: "/:mode/feedback",
      controller: "SDFeedbackCtrl",
      templateUrl: "feedback.tpl.html"
    });
    $stateProvider.state("article", {
      url: "/:mode/article/:articleID",
      controller: "SDArticleCtrl",
      templateUrl: "article.tpl.html"
    });
    $stateProvider.state("menu_with_product", {
      url: "/:mode/menu/:menuId/:productId",
      controller: "SDMenuCtrl",
      templateUrl: "menu.tpl.html"
    });
    $stateProvider.state("browse_with_product", {
      url: "/:mode/browse/:menuId/:productId",
      controller: "SDMenuCtrl",
      templateUrl: "menu.tpl.html"
    });
    $stateProvider.state("dynamic_marker_browse", {
      url: "/:mode/dynamic_marker_browse/:menuId",
      controller: "SDBrowseCtrl",
      templateUrl: "browse.tpl.html"
    });
    return $stateProvider.state("browse", {
      url: "/:mode/browse/:markerID",
      controller: "SDBrowseCtrl",
      templateUrl: "browse.tpl.html"
    });
  }
]);
