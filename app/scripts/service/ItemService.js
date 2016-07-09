angular.module('shoppingUiNgApp')
 .service('itemService',['$http','$q',function($http, $q){
  var self = this;
  self.getItems = function(){
    return  $q.when([{
                         "barcode": "ITEM00000",
                         "name": "可口可乐",
                         "unit": "瓶",
                         "category": "食品",
                         "subCategory": "碳酸饮料",
                         "price": 3.0
                     },
                     {
                         "barcode": "ITEM00001",
                         "name": "乐事薯片",
                         "unit": "袋",
                         "category": "食品",
                         "subCategory": "休闲食品",
                         "price": 3.5
                     },
                     {
                         "barcode": "ITEM00002",
                         "name": "苹果",
                         "unit": "斤",
                         "category": "食品",
                         "subCategory": "水果",
                         "price": 5.0
                     },
                     {
                         "barcode": "ITEM00003",
                         "name": "趣多多",
                         "unit": "条",
                         "category": "食品",
                         "subCategory": "饼干",
                         "price": 6.0
                     },
                     {
                         "barcode": "ITEM00004",
                         "name": "士力架",
                         "unit": "根",
                         "category": "食品",
                         "subCategory": "甜品",
                         "price": 4.0
                     },
                     {
                         "barcode": "ITEM00005",
                         "name": "凉拌猪耳朵",
                         "unit": "两",
                         "category": "食品",
                         "subCategory": "凉菜",
                         "price": 5.0
                     },
                     {
                         "barcode": "ITEM00006",
                         "name": "雀巢拿铁",
                         "unit": "瓶",
                         "category": "食品",
                         "subCategory": "饮料",
                         "price": 6.0
                     },
                     {
                         "barcode": "ITEM00007",
                         "name": "T恤",
                         "unit": "件",
                         "category": "服装",
                         "subCategory": "上衣",
                         "price": 59.0
                     },
                     {
                         "barcode": "ITEM00008",
                         "name": "小米耳机",
                         "unit": "副",
                         "category": "手机配件",
                         "subCategory": "耳机",
                         "price": 49.0
                     },
                     {
                         "barcode": "ITEM00009",
                         "name": "马克杯",
                         "unit": "杯",
                         "category": "生活用品",
                         "subCategory": "水杯",
                         "price": 39.0
                     }
                             ])
  };
  }
 ]);
