///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

const summedPrice = cart.reduce((total, cost) => total + cost.price, 0)

//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
function calcFinalPrice(cartTotal, couponValue, tax) {
    let taxApplied = cartTotal * (1  + tax)
    let couponApplied = taxApplied - couponValue
    return couponApplied
}

// console.log(calcFinalPrice(20, 5, .06))

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
    for my customer object I decided on these four parameters.

First is 'age'. This is for the restaurant to know if the customer is older than 21, so if they'd like they could be seated at the bar or offered a alcholic drink menu. This property will be a number datatype.

Second is whether the custoomer is Vegan or not. This will tell the restaurant if the customer should be given details about a secondary menu with vegan options, and this property will be a boolean value.

Third is the entree option, which will be a string datatype and will tell restaurant what entree to make for the customer.

Fourth is the drink option, and like the entree option it will be a string datatype to tell restaurant what drink to get for customer.
*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
let CustomerBob = {
    age: 22,
    vegan: false,
    entree: "Tacos",
    drink: "Diet Soda",
}