function MenuPosition() {
}

MenuPosition.prototype.getName = function () {
    return this.name;
}

MenuPosition.prototype.getPrice = function () {
    return this.price;
}

MenuPosition.prototype.getCalories = function () {
    return this.calories;
}

////////////////////HAMBURGER//////////////////////////////////
function Hamburger(size, stuffing) {
        this.name = size.name + ' with ' + stuffing.name;
        this.price = size.price + stuffing.price;
        this.calories = size.calories + stuffing.calories;
    MenuPosition.call(this);
}

Hamburger.prototype = Object.create(MenuPosition.prototype);

Hamburger.SIZE_SMALL = {
    name: 'MiniBurger',
    price: 50,
    calories: 20,
}

Hamburger.SIZE_LARGE = {
    name: 'MaxiBurger',
    price: 100,
    calories: 40,
}

Hamburger.STUFFING_CHEESE = {
    name: 'cheese',
    price: 10,
    calories:  20,
}

Hamburger.STUFFING_SALAD = {
    name: 'salad',
    price: 20,
    calories: 5,
}

Hamburger.STUFFING_POTATO = {
    name: 'potato',
    price: 15,
    calories: 10,
}
////////////////////SALAD////////////////////////////
function Salad(item, itemWeight) {
    
    var grams = 0.01;

    this.name = item.name;
    this.price = item.price * itemWeight * grams;
    this.calories = item.calories * itemWeight * grams;
    MenuPosition.call(this);
}

Salad.prototype = Object.create(MenuPosition.prototype);

Salad.CEASER = {
    name: 'Ceaser',
    price: 100,
    calories: 20,
}

Salad.OLIVIE = {
    name: 'Olivie',
    price: 50,
    calories: 80, 
}
//////////////////////DRINKS//////////////////////////////////
function Drinks(item) {
    this.name = item.name;
    this.price = item.price;
    this.calories = item.calories;
    MenuPosition.call(this);
}

Drinks.prototype = Object.create(MenuPosition.prototype);

Drinks.COLA = {
    name: 'Cola',
    price: 50,
    calories: 40,
}

Drinks.COFFEE = {
    name: 'Coffee',
    price: 80,
    calories: 20,
}

////////////////////////////ORDER//////////////////////////////////////
function Order(item) {
    this.item = item;
    this.paid = false;
}

Order.prototype.getPaid = function (getMoney) {
    if (getMoney >= myOrder.getBill()){
        return this.paid = true;
    } else return this.paid = false;
}

Order.prototype.addPosition = function (position) {
    if (this.paid) {
        return ('Bill is already paid!')
    } else {
        return this.item.push(position);
    }
}

Order.prototype.removePosition = function (position) {
    if (this.paid) {
        return ('Bill is already paid!')
    } else {
        this.item.splice(this.item.indexOf(position), 1);  
        return this.item;
    }
}

Order.prototype.getOrderList = function () {
    return this.item.reduce(function (name, item) {
        return name + item.getName() + ' | ';
    }, ''); 
}

Order.prototype.getBill = function () {
    return this.item.reduce(function (bill, item) {
        return bill + item.getPrice();
    }, 0);
}

Order.prototype.getAllCalories = function() {
    return this.item.reduce(function(energy, item){
        return energy + item.getCalories();
    }, 0)
}