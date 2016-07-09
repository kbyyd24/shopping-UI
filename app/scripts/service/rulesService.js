angular.module('shoppingUiNgApp')
 .service('rulesService',['$http','$q',function($http, $q){
  var self = this;
  self.getRules = function(){
    return  $q.when([
                         {
                             "type": 1,
                             "name": "满一百减十块",
                             "barcodes": [
                                 "ITEM00000",
                                 "ITEM00001",
                                 "ITEM00003",
                                 "ITEM00006",
                                 "ITEM00008"
                             ]
                         }
                     ])
  };
  }
 ]);
