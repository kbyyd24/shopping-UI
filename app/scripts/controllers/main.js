'use strict';

/**
 * @ngdoc function
 * @name shoppingUiNgApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the shoppingUiNgApp
 */

angular.module('shoppingUiNgApp')
	.controller('MainCtrl', function (itemService, rulesService, paymentService) {
	    var vm = this;
	    itemService.getItems().then(function (result) {
	      vm.items = result;
	    });
	    rulesService.getRules().then(function(result){
	      vm.rules = result;
	    });
	   
	    /*检查某商品是否参与活动，如参与，有颜色标识*/
	    vm.hasDiscount = function(item){
		    return _.chain(vm.rules)
		    .map(function(item){
		        return item.barcodes;
	    	})
		    .flatten()
		    .some(function(barcode){
		    	return item.barcode === barcode;
		    })
		    .value();
	    };

	    /*itemInCart用于记录购物车中已有商品，addToCart将根据商品点击事件添加购物车中不存在的商品*/
	    vm.itemInCart = [];
      	vm.addToCart = function(item){
        	var result = _.chain(vm.itemInCart)
        	.map(function(o){
            	return o.barcode;
        	})
	        .flatten()
	        .some(function(barcode){
	          	return item.barcode === barcode;
	        })
	        .value();
	        if(result == false)
	          	vm.itemInCart.push(item);
	    };

	    /*检查购物车是否为空，如果为空，将显示空购物车提示*/
	    vm.cartIsEmpty = function(){
	    	return (vm.itemInCart.length == 0 ? true : false);
	    }
	    
	    /*清空购物车*/
	    vm.clearCart = function(){
	    	vm.itemInCart = [];
	    };
	    
	    /*打印小票*/
	    vm.printClickFlag = false;
	    vm.printReceipt = function(){
	    	/*获取购物车信息并封装成数组*/
			var inputs = angular.element("input");
        	var cartList = [];

        	for(var i in vm.itemInCart)
          		cartList[i] = vm.itemInCart[i].barcode + "-" + inputs[i].value;

			var list = new Object(); 
			list.items = cartList; 
			var json = JSON.stringify(list);

	    	paymentService.getPayment(json).then(function(result){
		      	vm.payment = result;
		      	vm.printClickFlag = true;
		      	console.log(result);
		    });
 	    	/*清空购物车*/
 	    	vm.itemInCart = [];

	    };
	});

