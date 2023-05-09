var All_fruits;
(function (All_fruits) {
    All_fruits[All_fruits["Apple"] = 0] = "Apple";
    All_fruits[All_fruits["Banana"] = 1] = "Banana";
    All_fruits[All_fruits["Grapes"] = 2] = "Grapes";
    All_fruits[All_fruits["Orange"] = 3] = "Orange";
})(All_fruits || (All_fruits = {}));
;
var fruit = All_fruits.Apple;
console.log(All_fruits);
console.log(fruit);
console.log(All_fruits[2]);
