/*

A restaurant has hired you to create a function for their website that allows them to set a meal and price each morning for Today’s Special. 
Use your knowledge of getters and setters to make sure anyone who uses the new function can generate a meal and a price for Today’s Special without any embarrassing errors

*/

const menu = { 
    //created menu object
    _meal : ' ', // created a meal property w/ a empty sting
    _price : 0, // created a price property
  
    set meal(mealToCheck) {
      // created a setter method w/ one argument
      if(typeof mealToCheck === "string"){
        return this._meal = mealToCheck
      }
    },
    set price (priceToCheck) { 
      // created a setter method w/ one argument
      if(typeof priceToCheck === "number"){
        return this._price = priceToCheck
      }
    },
    get todaysSpecial() {
      // created a get method
      if(this._meal && this._price) { // check to see if both properties are true
        return `Today's Special is ${this._meal} for $${this._price}!`  
      } else {
        return 'Meal of price was not set correctly'
      }
    }
  }
  
  menu.meal = "Cheese Burger"
  menu.price = 15.99
  console.log(menu.todaysSpecial)