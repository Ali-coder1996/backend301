'use strict';
const axios  = require("axios");
const {Drinks,myDrink}=require('../model/user.model')

const getDrink=(req,rse)=>{
    let url='https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic'
    axios.get(url).then(item=>{
        console.log(item.data.drinks)
        let drinkData=item.data.drinks;
        drinkData.map(item=>{
            return(new Drinks(item))
        })
        rse.json(drinkData)
    })
}

const addDrink=(req,rse)=>{
    let drinkData=req.body
    const newDrink= new myDrink({...drinkData})
    newDrink.save()
}

const getData=(req,rse)=>{
    myDrink.find({},(error,item)=>{
        rse.send(item)
    })
}

const deleteDrink=(req,rse)=>{
    let index =req.params.id
    myDrink.findByIdAndRemove(index,(error,item)=>{
        myDrink.find({},(error,item1)=>{
            rse.send(item1)
        })
    })
}

const updataDrink=(req,rse)=>{
    let index =req.params.id;
    let updataData=req.body
    myDrink.findByIdAndUpdate(index,{...updataData},(error,item)=>{
        myDrink.find({},(error,item1)=>{
            rse.send(item1)
        })
    })
}


module.exports={getDrink,addDrink,getData,deleteDrink,updataDrink}





































































// const axios  = require("axios");
// const { Drink, myDrink } = require('../model/user.model')

// const getDrink = (req, res) => {
//     const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic`
//     axios.get(url).then(item => {
//         const drink = item.data.drinks
//         drink.map(item => {
//             return (new Drink(item))
//         })
//         res.json(drink)

//     }).catch(error => res.send(error.message))
// }

// const addDrink = (req, res) => {
//     let bodyData=req.body
//     const Drink = new myDrink({...bodyData})
//     Drink.save()
// }

// const getData=(req, res)=> {
//     myDrink.find({},(error,item)=>{
//         if(error){
//             res.send(error)
//         }else {
//             res.send(item)
//         }
//     })
//   }
// const deleteDrink=(req, res)=> {
//     let idx=req.params.id
//     myDrink.findByIdAndRemove(idx,(error,item)=>{
//         myDrink.find({},(error,item1)=>{
//             if(error){
//                 res.send(error)
//             }else {
//                 res.send(item1)
//             }
//         })
//     })
// }

// const updataDrink=(req, res)=> {
//     let idx=req.params.id
//     let body = req.body;
//     myDrink.findByIdAndUpdate(idx,{...body},(error,item)=>{
//         myDrink.find({},(error,item1)=>{
//             if(error){
//                 res.send(error)
//             }else {
//                 res.send(item1)
//             }
//         })
//     })
// }
// module.exports = { getDrink,addDrink,getData ,deleteDrink,updataDrink}