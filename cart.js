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

const summedPrice = cart.reduce(function(acc, elem){
    return acc + elem.price
}, 0)

console.log(summedPrice)


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
    
    cartTotal = cart.reduce(function(acc, elem){
        return acc + elem.price
    }, 0)
    finalPrice = (cartTotal * tax) - couponValue
    console.log(finalPrice)
} 

calcFinalPrice(summedPrice, .02, 1.06 )


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
    properties will be 
    first name(to identify a customer, String-will consist of abc chars) 
    last name(to help identify customer, String- will consist of abc chars), 
    email(to contact customer and verify, String- will consist of various char types)
    address (To deliver, String will have abc chars and alphanumeric chars)
    phone number(to contact and verify, Number will have number chars)

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
customer = {firstName: 'firstName', lastName: 'lastName', email: 'email@email.com', address: '123 main st', phone: 5551111234 }