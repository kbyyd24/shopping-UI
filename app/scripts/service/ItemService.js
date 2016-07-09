angular.module('shoppingUiNgApp')
 .service('itemService',['$http','$q',function($http, $q){
  var self = this;
  self.getItems = function(){
    return  $q.when([{name:'111'}])
  };
  }
 ]);
