
shopping-ui [![Build Status](https://travis-ci.org/kbyyd24/shopping-ui.png)](https://travis-ci.org/kbyyd24/shopping-ui)
=======================================================================================================================

收银机 - G1 - 全单满100减10块

面试作业

##需求描述

商店里进行购物结算时会使用收银机系统，这台收银机会在结算时根据客户的购物车中的商品和商店正在进行的优惠活动进行结算和打印购物小票。

已知商品信息包含：名称，数量单位，单价，类别和条形码（伪）。数据结构如下：

```javascript
{
  barcode: 'ITEM000000',
  name: '可口可乐',
  unit: '瓶',
  category: '食品',
  subCategory: '碳酸饮料',
  price: 3.00
}
```

已知我们可以对收银机进行设置，使之支持各种优惠。
我们需要实现一个名为打印小票的小模块，收银机会将输入的数据转换成一个JSON数据然后一次性传给我们这个小模块，我们将从控制台中输出结算清单的文本。

输入格式（样例）：

```javascript
[
    'ITEM000001',
    'ITEM000001',
    'ITEM000001',
    'ITEM000001',
    'ITEM000001',
    'ITEM000003-2',
    'ITEM000005',
    'ITEM000005',
    'ITEM000005'
]
```

其中对'ITEM000003-2'来说,"-"之前的是标准的条形码,"-"之后的是数量。
当我们购买需要称量的物品的时候,由称量的机器生成此类条形码,收银机负责识别生成小票。

该商店正在对部分商品进行“全单满100减10块”的优惠活动。解释：
“全单满100减10块”是指，每当整单算完之后，如果满100，则减去10元再收取，如果满200，则减去20元再收取。以此类推。
店员设置该优惠哪些条形码对应的商品参与此优惠，哪些条形码对应的商品不参与此优惠。享受此优惠的商品价格才能参与优惠价格计算，不享受此优惠的商品价格不参与优惠价格计算。

促销信息对象的数组格式（样例）：

```javascript
[
  {
    type: 'FULL_ONE_HUNDRED_MINUS_TEN',
    barcodes: [
      'ITEM000000',
      'ITEM000001'
    ]
  }
]
```
**注意**:type和barcodes是促销信息对象的主体结构，也可以适当扩展其它属性，以适应程序的扩展性。

要求写代码支持上述的功能，并根据以上输入和设置的不同，输出下列小票。
小票内容及格式（样例）：

当购买的商品符合“全单满100减10块”优惠条件，且有不参与此优惠的商品时：

```
***<没钱赚商店>购物清单***
名称：篮球，数量：1个，单价：98.00(元)，小计：98.00(元)
名称：可口可乐，数量：3瓶，单价：3.00(元)，小计：9.00(元)
名称：羽毛球，数量：5个，单价：1.00(元)，小计：5.00(元)
名称：苹果，数量：2斤，单价：5.50(元)，小计：11.00(元)
----------------------
不参与优惠商品：
名称： 苹果，价格： 11.00(元)
参与优惠总价：102.00(元)，优惠：10.00(元)
----------------------
总计：113.00(元)
节省：10.00(元)
**********************
```

当购买的商品没有符合“全单满100减10块”优惠条件的商品时：

```
***<没钱赚商店>购物清单***
名称：可口可乐，数量：3瓶，单价：3.00(元)，小计：9.00(元)
名称：羽毛球，数量：5个，单价：1.00(元)，小计：5.00(元)
名称：苹果，数量：2斤，单价：5.50(元)，小计：11.00(元)
----------------------
总计：25.00(元)
**********************
```

##作业要求

请完成全部需求，并输出样例格示的小票；
程序实现语言（JavaScript、C#、Java、Scala等）和实现形式（Console、Web、Desktop、APP等）不限；
请在保证实现代码的同时，尽量保持代码的整洁性、可读性、易于扩展和维护性等；

##加分项

满足以下的条件（但并不仅限于这些条件），将会成为你的加分项：

良好的抽象和设计；
完善的测试，TDD开发；
git小步提交；
良好的构建和编码规范；