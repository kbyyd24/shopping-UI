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
	    paymentService.getPayment().then(function(result){
	      vm.payment = result;
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

	    /*记录购物车中商品信息，将此数据传递给后台并生成小票*/
      	vm.cartData = function(){
        	var inputs = angular.element("input");
        	var cartList = [];

        	for(var i in vm.itemInCart)
          		cartList[i] = vm.itemInCart[i].barcode + "-" + inputs[i].value;
        	return cartList;
	    };
	    
	    /*检查购物车是否为空，如果为空，将显示空购物车提示*/
	    vm.cartIsEmpty = function(){
	    	return (vm.itemInCart == [] ? true : false);
	    }
	    
	    /*清空购物车*/
	    vm.clearCart = function(){
	    	vm.itemInCart = [];
	    };
	    
	    /*打印小票*/
	    vm.printReceipt = function(){
	    	
	    };
	});

