'use strict'
const mongoose = require('mongoose');

class Drinks {
    constructor(item){
        this.strDrink=item.strDrink;
        this.strDrinkThumb=item.strDrinkThumb;
        this.idDrink=item.idDrink;
    }
}

const DrinkSchema = new mongoose.Schema({
    strDrink: String,
    strDrinkThumb: String,
    idDrink: String
});


const myDrink = mongoose.model('drinkList', DrinkSchema);


module.exports={Drinks,myDrink}










































// class Drink {
//     constructor(item){
//         this.idDrink=item.idDrink
//         this.strDrink=item.strDrink
//         this.strDrinkThumb=item.strDrinkThumb
//     }
// }

// const DrinkSchema = new mongoose.Schema({
//     idDrink: String,
//     strDrink: String,
//     strDrinkThumb: String
// });

// const myDrink = mongoose.model('Drink', DrinkSchema);

// module.exports={Drink,myDrink}