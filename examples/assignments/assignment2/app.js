(function () {
'use strict';

var toBuyList = [
  {
    name: "Milk",
    quantity: "2"
  },
  {
    name: "Donuts",
    quantity: "200"
  },
  {
    name: "Cookies",
    quantity: "300"
  },
  {
    name: "Chocolate",
    quantity: "5"
  },
  {
    name: "Apples",
    quantity: "8"
  },
  {
    name: "Nuts",
    quantity: "45"
  }
];

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.provider('ShoppingList', ShoppingListProvider)
.config(Config);

Config.$inject = ['ShoppingListProvider'];
function Config(ShoppingListProvider) {
  ShoppingListProvider.defaults.maxItems = 5;
}

AlreadyBoughtController.$inject = ['ShoppingList'];
function AlreadyBoughtController(ShoppingList) {
  var bought = this;
  bought.items = ShoppingList.getBoughtItems();
  bought.showError = function () {
    return ShoppingList.errorMessage(bought.items);
  }

}

ToBuyController.$inject = ['ShoppingList'];
function ToBuyController(ShoppingList) {
  var toBay = this;

  toBay.items = ShoppingList.getItems();

  toBay.boughtItem = function (itemIndex) {
    try {
      ShoppingList.boughtItem(itemIndex);
    } catch (error) {
      toBay.errorMessage = error.message;
    }
  };
}


// If not specified, maxItems assumed unlimited
function ShoppingListCheckOffService(maxItems) {
  var service = this;

  // List of shopping items
  var toBuyItems = toBuyList;
  var boughtItems = [];

  service.boughtItem = function (itemIndex) {
    
    boughtItems.push(toBuyItems[itemIndex]);
    toBuyItems.splice(itemIndex, 1);
    if (toBuyItems.length === 0) {
      throw new Error("Everything is bought!");
    }
  };

  service.getItems = function () {
    return toBuyItems;
  };

  service.getBoughtItems = function () {
    return boughtItems;
  };

  service.errorMessage = function(list) {
    if (list.length == 0) {
      return true;
    }
    return false;
  };
}


function ShoppingListProvider() {
  var provider = this;

  provider.defaults = {
    maxItems: 100
  };

  provider.$get = function () {
    var shoppingList = new ShoppingListCheckOffService(provider.defaults.maxItems);

    return shoppingList;
  };
}

})();
