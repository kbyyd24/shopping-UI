'use strict';

/**
 * @ngdoc function
 * @name shoppingUiNgApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the shoppingUiNgApp
 */
angular.module('shoppingUiNgApp')
  .controller('MainCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

$(function(){
	onSaleGoodsInit();
});
/*
function rulesInit(){
	var url = "http://localhost:8080/item";
	$.ajax({
    	url: url,
		type: 'get',
		dataTypt: 'json',
		success: function(data){
            
        },
	    error: function(xhr, msg){
	        alert(msg);
	    }
	});
}*/
//展示所有在售商品
function onSaleGoodsInit(){
	var whenResult = $.when($.ajax("http://localhost:8080/item"), $.ajax("http://localhost:8080/rules"));  
	whenResult.done(function(a1,a2){ 
		var onsale_data=a1[0];
		var discount_list=a2[0];
		var str ="";
		for(var i=0;i<onsale_data.length;i++){
			if($.inArray(onsale_data[i].barcode,discount_list[0].barcodes) != -1){
				str += '<a onclick="addToCart(\''+onsale_data[i].barcode 
			+'\')" title ="参与满100减10元的活动"class="list-group-item list-group-item-danger" id="'
			+onsale_data[i].barcode +'"><span class="badge">'+onsale_data[i].price.toFixed(2)+' 元/'
			+onsale_data[i].unit+'</span>'+ onsale_data[i].name+'</a>';
			}else{
				str += '<a onclick="addToCart(\''+onsale_data[i].barcode 
			+'\')" title="不参与活动" class="list-group-item" id="'+onsale_data[i].barcode 
			+'"><span class="badge">'+onsale_data[i].price.toFixed(2)+' 元/'
			+onsale_data[i].unit+'</span>'+ onsale_data[i].name+'</a>';
			}
		}
		$("#L-onsale").html(str);
	});  
	whenResult.fail(function(){  
		alert("瞄~出错误了！~~~(>_<)~~~");
	})  
}
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
}
