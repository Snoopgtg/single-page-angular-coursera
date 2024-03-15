var numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Number array: ", numberArray);

function above5filter(value) {
	return value > 5;
}

var filterdNumberArray = numberArray.filter(above5filter);
console.log("Filterd number array: ", filterdNumberArray);

var shoppingList = [
  "Milk", "Donuts", "Cookies", "Chocolate", "Peanut Butter", "Pepto Bismol", "Pepto Bismol (Chocolate flavor)", "Pepto Bismol (Cookie flavor)"
];
console.log("Shopping list: ", shoppingList);

var searchValue = "Bismol";
function containsFilter(value) {
	return value.indexOf(searchValue) !== -1;
}
var searchedShoppingList = shoppingList.filter(containsFilter);
console.log("Searched shopping list: ", searchedShoppingList);