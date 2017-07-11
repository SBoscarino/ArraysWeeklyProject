// Since the `data.js` file is loaded in your `index.html` before this one,
// you have access to the `data` variable that contains the Etsy Store data.
// Open your `index.html` page in your browser and you can verify that the following
// is properly working. The `data` variable is an array with 25 items in it
// console.log(data);



// 1: Show me how to calculate the average price of all items.
function question1 () {
  let sum = 0;
 for (let i = 0; i < data.length; i++) {
   sum += data[i].price;
 }
 let averagePrice = sum / data.length;
 console.log("The average price is " + averagePrice + ".");
}



// 2: Show me how to get an array of items that cost between $14.00 and $18.00 US
function question2 () {
  let questionTwoArray = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].price < 18 && data[i].price >= 14) {
      questionTwoArray.push(data[i].title);
    }
  }
  console.log(questionTwoArray);
}


// 3: Which item has a "GBP" currency code? Display its name and price.
function question3 () {
  for (let i = 0; i < data.length; i++) {
    if (data[i].currency_code === "GBP") {
      console.log(data[i].title, data[i].price);
    }
  }
}


// 4: Display a list of all items who are made of wood.
function question4 () {
  let materialQuestion = [];
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].materials.length; j++) {
      if (data[i].materials[j] === "wood") {
        materialQuestion.push(data[i].title);
      }
    }
  }
  console.log(materialQuestion);
}


// 5: Which items are made of eight or more materials?
//    Display the name, number of materials and the materials it is made of.
function question5 () {
  let questionFiveVar = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].materials.length >= 8) {
       questionFiveVar.push(data[i].title + data[i].materials.length + data[i].materials);
    }
  }
  console.log(questionFiveVar);
}


// 6: How many items were made by their sellers?
// Answer:

function question6 () {
  count = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i].who_made === "i_did") {
      count++;
    }
  }
  console.log(count + " items were made by their sellers.");
}
