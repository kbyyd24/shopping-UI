'use strict';

/**
 * @ngdoc function
 * @name shoppingUiNgApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the shoppingUiNgApp
 */
angular.module('shoppingUiNgApp')
	.controller('MainCtrl', function (itemService, rulesService) {
	    var vm = this;
	    itemService.getItems().then(function (result) {
	      vm.items = result;
	    });
	    rulesService.getRules().then(function(result){
	      vm.rules =result;
	    });

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

	    vm.itemInCart = [];
	    vm.addToCart = function(item){
	    	return _.chain(vm.itemInCart)
		    .map(function(o){
		        return o.barcode;
	    	})
		    .flatten()
		    .some(function(barcode){
		    	return item.barcode === barcode;
		    })
		    .tap(function(vm.itemInCart) {
			   
			 })
		    .isSymbol(function(result){
		    	result == true ? {vm.itemInCart.push(item); return true; } : {return false;} ;
		    })
		    .value();
	    }
	    
	    vm.clearCart = function(){
	    	vm.itemInCart = [];
	    };
	    vm.printReceipt = function(){
	    	
	    };

	});

/*$(function(){
	

//向购物车添加商品将选购物品
function addToCart(id){
	var cart_list = JSON.parse(localStorage.getItem("cartlist"));
	if(cart_list.hasOwnProperty(id))
		cart_list[id] ++;
	else
		cart_list[id] = 1;
	localStorage.setItem("cartlist",JSON.stringify(cart_list));
	DrawCart();
}
//删除购物车中物品
function deleteFromCart(id){
	var cart_list = JSON.parse(localStorage.getItem("cartlist"));
	if(cart_list[id]>1)
		cart_list[id] --;
	else
		delete cart_list[id];
	localStorage.setItem("cartlist",JSON.stringify(cart_list));
	DrawCart();
}
//重绘购物车用
function DrawCart(){

	var cart_list = JSON.parse(localStorage.getItem("cartlist"));
	var total_sum = 0.0;
	var cartstr = "";
	for(item in cart_list)
	{
		for(index = 0;index<onsale_data.length;index++)
		{
			if(item == onsale_data[index].barcode)
				break;
		}
		total_sum += cart_list[item] * parseFloat(onsale_data[index].price);
		cartstr += '<a onclick="deleteFromCart(\''+onsale_data[index].barcode
		+'\')" class="list-group-item" id="'+onsale_data[index].barcode
		+'"><span class="badge">'+cart_list[item]
		+onsale_data[index].unit+'</span>'+ onsale_data[index].name+'</a>'
	}
	$("#L-cart").html(cartstr);
	$("#final-price").html("￥"+total_sum.toFixed(2)+"（元）");
}*/
