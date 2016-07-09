'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('shoppingUiNgApp'));

  var mainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($rootScope, $controller) {
    scope = $rootScope.$new();
    mainCtrl = $controller('MainCtrl', {
      $scope: scope,
    });

    scope.$apply();
  }));

  it('should get all items to init item list', function () {
    expect(mainCtrl.items.length).toBe(10);
    expect(mainCtrl.items[0].name).toBe("可口可乐");
    expect(mainCtrl.items[0].barcode).toBe("ITEM00000");
  });

  xit('should get all rules', function () {
    expect(mainCtrl.items.length).toBe(10);
    expect(mainxCtrl.items[0].name).toBe("可口可乐");
    expect(mainCtrl.items[0].barcode).toBe("ITEM00000");
  });

});
