// Write your code here
class Breakfast {
    constructor(food, drink) {//use 'constructor' and pass in desired args
        this.food = food
        this.drink = drink
    }
}
class Lunch {
    constructor(salad, soup, drink){
        this.salad = salad
        this.soup = soup
        this.drink = drink
    }
}
class Dinner {
    constructor(salad, soup, entree, dessert){
        this.salad = salad
        this.soup = soup
        this.entree = entree
        this._dessert = dessert//this means thatt 'undefined' will equal whatever has been passed in to dessert.
    }
}