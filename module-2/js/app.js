(function() {
    angular
        .module('ShoppingListCheckOff', [])
        .service('shoppingListCheckOffService', ShoppingListCheckOffService)
        .controller('ToBuyShoppingController', ToBuyShoppingController)
        .controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController);

    ToBuyShoppingController.$inject = ['$scope','shoppingListCheckOffService'];
    AlreadyBoughtShoppingController.$inject = ['$scope','shoppingListCheckOffService'];

    function ToBuyShoppingController($scope, shoppingListCheckOffService) {
        this.getItems = function() { return shoppingListCheckOffService.getBuyItems(); };
        this.checkOffItem = function(index) { shoppingListCheckOffService.checkItemBought(index);} };

    function AlreadyBoughtShoppingController($scope, shoppingListCheckOffService) {
        this.getItems = function() { return shoppingListCheckOffService.getBoughtItems(); };}

    function ShoppingListCheckOffService() {
        var items = [
            { name: 'cookies',   quantity: 10 },
            { name: 'milk',      quantity: 2 },
            { name: 'banana',      quantity: 2 },
            { name: 'chocolate', quantity: 7 },
            { name: 'apples',    quantity: 3 },
            { name: 'carrot',    quantity: 3 },
            { name: 'cake',   quantity: 5 }
        ];
        this.getBuyItems = function() { return items.filter(function(item) { return !item.isBought }); };
        this.getBoughtItems = function() { return items.filter(function(item) { return item.isBought }); };
        this.checkItemBought = function(index) { var item = this.getBuyItems()[index]; item.isBought = true;};
    }
})();
