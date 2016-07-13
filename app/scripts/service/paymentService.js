angular.module('shoppingUiNgApp')
  .service('paymentService', ['$http', 'webConfig',function ($http, webConfig) {
    var self = this;
   
   /*取到main.js中cartData的值并传给后台，同时后台根据传过去的值生成返回数据而后生成小票*/
    self.getPayment = function (myData) {
      return $http({
                url: webConfig.api.host + "payment",
                method: "POST",
                data: self.cartData,
                headers:{
                  'Access-Control-Allow-Origin':'*',
                  'Content-Type': 'application/json'
                }
              }).success(function (data) {
                        console.log(data);
                       return data;
                       
              }).error(function () {
                      console.log("error");
              });
    };
  }
  ]);
