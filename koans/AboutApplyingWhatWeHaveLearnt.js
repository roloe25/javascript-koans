var _; // globals

describe("About Applying What We Have Learnt", function() {
  var products;

  beforeEach(function () {
    products = [
       { name: "Sonoma", ingredients: ["artichoke", "sundried tomatoes", "mushrooms"], containsNuts: false },
       { name: "Pizza Primavera", ingredients: ["roma", "sundried tomatoes", "goats cheese", "rosemary"], containsNuts: false },
       { name: "South Of The Border", ingredients: ["black beans", "jalapenos", "mushrooms"], containsNuts: false },
       { name: "Blue Moon", ingredients: ["blue cheese", "garlic", "walnuts"], containsNuts: true },
       { name: "Taste Of Athens", ingredients: ["spinach", "kalamata olives", "sesame seeds"], containsNuts: true }
    ];
  });

  /*********************************************************************************/

  it("given I'm allergic to nuts and hate mushrooms, it should find a pizza I can eat (imperative)", function () {
    var i,j,hasMushrooms, productsICanEat = [];

    for (i = 0; i < products.length; i+=1) {
        if (products[i].containsNuts === false) {
            hasMushrooms = false;
            for (j = 0; j < products[i].ingredients.length; j+=1) {
               if (products[i].ingredients[j] === "mushrooms") {
                  hasMushrooms = true;
               }
            }
            if (!hasMushrooms) productsICanEat.push(products[i]);
        }
    }

    expect(productsICanEat.length).toBe(1);
  });

  it("given I'm allergic to nuts and hate mushrooms, it should find a pizza I can eat (functional)", function () {
    var productsICanEat = [];


    productsICanEat = _(products).filter(obj =>
      (obj.containsNuts === false) &&
      _(obj.ingredients).all(x => x !== "mushrooms"))




      /* solve using filter() & all() / any() */

      expect(productsICanEat.length).toBe(1);
  });

  /*********************************************************************************/

  it("should add all the natural numbers below 1000 that are multiples of 3 or 5 (imperative)", function () {
    var sum = 0;

    for(var i=1; i<1000; i+=1) {
      if (i % 3 === 0 || i % 5 === 0) {
        sum += i;

      }
    }

    expect(sum).toBe(233168);
  });

  it("should add all the natural numbers below 1000 that are multiples of 3 or 5 (functional)", function () {
    var sum = 0
    var arrayFrom1to1000 = _.range(0,1000)
     sum = _(arrayFrom1to1000).reduce(
       function(memo, x) {
         if ( x % 3 === 0 || x % 5 === 0 ) {
            return memo + x}
            else
            {return memo}
                         });    /* try chaining range() and reduce() */
    //resons why i had issues with this is because i could not use these funciton in replit sto play around

    // function(memo, x) {

    //   // note: memo is the result from last call, and x is the current number
    //   return memo + x;

    expect(233168).toBe(sum);
  });

  /*********************************************************************************/
   it("should count the ingredient occurrence (imperative)", function () {
    var ingredientCount = { "{ingredient name}": 0 };

    for (i = 0; i < products.length; i+=1) {
        for (j = 0; j < products[i].ingredients.length; j+=1) {
            if (ingredientCount[products[i].ingredients[j]] === undefined ) {
              ingredientCount[products[i].ingredients[j]] = 1
            } else{
              ingredientCount[products[i].ingredients[j]] = ingredientCount[products[i].ingredients[j]] + 1
            }
        }
    }

  //   for (i = 0; i < products.length; i+=1) {
  //     for (j = 0; j < products[i].ingredients.length; j+=1) {
  //         ingredientCount[products[i].ingredients[j]] = (ingredientCount[products[i].ingredients[j]] || 0) + 1;
  //     }
  // }

    expect(ingredientCount['mushrooms']).toBe(2);
  });

  it("should count the ingredient occurrence (functional)", function () {

    /* chain() together map(), flatten() and reduce() */

    //map while looking at any of these obj in profuct, check if ingredient is a

    var ingredientCount = { "{ingredient name}": 0 };

    //doesnt actually use reduce to do anything other than to update and iterate thru the array, not using "memo" or its true utility, like using a sword as a hammer.
    _(products).chain()
      .map(function(x) {return x.ingredients;})
      .flatten()
      .reduce(function(memo, x) {ingredientCount[x] = (ingredientCount[x] || 0) + 1;});

    /* chain() together map(), flatten() and reduce() */

    expect(ingredientCount['mushrooms']).toBe(2);


    // var ingredientObj = {}
    // var ingredientCount = []
    // var something = []
    // something = _(products).map( obj =>  ingredientCount.push(obj.ingredients))
    // ingredientCount = _(ingredientCount).flatten()
    // ingredientObj = _(ingredientCount).reduce( function(a, b) {ingredientObj[b] = (ingredientObj[b] || 0) + 1;})


  });

  /*********************************************************************************/
  //UNCOMMENT FOR EXTRA CREDIT

  // it("should find the largest prime factor of a composite number", function () {

  //   function findPrime(num){
  //     var biggestPrime = 0

  //     if (num === 0){
  //       return biggestPrime
  //     }else {}

  //     //check edges; if num is 1, return one,
  //     //if num is 0,



  //   }

  //   expect(findPrime(6)).toBe(3);


  // });

  // it("should find the largest palindrome made from the product of two 3 digit numbers", function () {

  //   function findPrime(num1, num2){
  //    var palindrome;
  //    return palindrome
  //   }

  //   expect(findPrime(555,444)).toBe(3);

  // });

  // it("should find the smallest number divisible by each of the numbers 1 to 20", function () {

  //   expect(ingredientCount['mushrooms']).toBe(2);

  // });

  // it("should find the difference between the sum of the squares and the square of the sums", function () {

  //   expect(ingredientCount['mushrooms']).toBe(2);


  // });

  // it("should find the 10001st prime", function () {

  //   function findBiggestPrime(num){
  //     var prime;
  //     return biggestPrime
  //   }

  //   expect(7933).toBe(findBiggestPrime(1001));


  // });

});
