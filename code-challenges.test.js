// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

// const people = [
//   { name: "ford prefect", occupation: "a hitchhiker" },
//   { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
//   { name: "arthur dent", occupation: "a radio employee" }
// ]
// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]


// Use the basic test format to create a test suite using Jest
    // describe: Name the test suite appropriately
    // it: Should return an array with a sentence about each person with their name capitalized.
    // expect: Invoke the function "createSentence" with the test variables passed in as arguments
    // toEqual: Pass the expected output as an argument

    describe("createSentence Method", () => {
      it("Should return an array with a sentence about each person with their name capitalized", () => {
        const people = [
          { name: "ford prefect", occupation: "a hitchhiker" },
          { name: "zaphod beeblebrox", occupation: "a president of the galaxy" },
          { name: "arthur dent", occupation: "a radio employee" }
        ]
        const expected = ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is a president of the galaxy.", "Arthur Dent is a radio employee."]
          expect(createSentence(people)).toEqual(expected)
      })
  })

// b) Create the function that makes the test pass.

// Create a function
    // Will name the function "createSentence"
    // Has 1 parameter that will accept an array, will name this parameter arr
// Within the function
    // Use the higher order function .map() on the given array (arr) that is passed in as an argument in order to iterate through all of the objects within the array
        // Create a variable and set the value to the name property of the current iteration
          // Use the .split(" ") method with a space passed in as an argument
        // Now that we have an array that contains both the first and last name. Use the higher order function .forEach() to capitalize the first and last name that are within this array
          // Declare a value and index within this .forEach() method
          // Reassign the current indexes value to:
            // Target the first charavter by using charAt(0) and use the toUpperCase() method to modify the first letter
            // String concatenate the rest of the string by using the .slice(1) method on the current iteration
          // Create a new variable to hold the first and lastname.
            // Set the value to equal splitName.join(" ")
            // Return a sentence using string interpolation with the full name and the occupation property `${fullName} is a ${value.occupation}.`


const createSentence = arr => {
  let sentences = arr.map(value => {
    let splitName = value.name.split(" ")
    splitName.forEach((value, index) => {
        splitName[index] = value.charAt(0).toUpperCase() + value.slice(1)
    })
    let fullName = splitName.join(" ")
    return `${fullName} is ${value.occupation}.`
  })
  return sentences
}


// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

// const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
// Expected output: [ 2, 0, -1, 0 ]
// const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
// Expected output: [ 2, 1, -1 ]
// const test = [0, 0, 0, 0]

// Use the basic test format to create a test suite using Jest
    // describe: Name the test suite appropriately
    // it: Should return an array with a sentence about each person with their name capitalized.
    // expect: Invoke the function "onlyRemainders" with the test variables passed in as arguments
    // toEqual: Pass the expected output as an argument

    describe("onlyRemainders Method", () => {
      it("Should return an array of only the REMAINDERS of the numbers when divided by 3.", () => {
        const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
        const expected1 = [ 2, 0, -1, 0 ]
        const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
        const expected2 =  [ 2, 1, -1 ]
        const test = [0, 0, 0, 0]
        const expected3 = [0, 0, 0, 0]
        expect(onlyRemainders(hodgepodge1)).toEqual(expected1)
        expect(onlyRemainders(hodgepodge2)).toEqual(expected2)
        expect(onlyRemainders(test)).toEqual(expected3)
      })
  })

// b) Create the function that makes the test pass.

// const onlyRemainders = arr => {
//   let listOfNumbers = arr.filter(value => {
//     if(value == 0){
//       return 0
//     } else if(typeof value == 'number') {
//       return value
//     }
//   })
//   console.log(listOfNumbers)
//   return listOfNumbers.map(value => {
//     return value % 3
//   })
// }

// Create a function
    // Will name the function "onlyReminaders"
    // Has 1 parameter that will accept an array, will name this parameter arr
// Within the function
    // Create a variable and set the value to an empty array
    // Use the higher order function .forEach() on the given array (arr) that is passed in as an argument
        // Within the .forEach() method, use a conditional to check if each iteration is has a data type of 'number'
          // If true
            // push the current iteration into the empty array
    // Use the .map() on the array that contais all of the numbers
      // Return the value % 3 for each iteration  
        // This will create a new array containing the remainders of each iteration


const onlyRemainders = arr => {
  let newArr = []
  arr.forEach(value => {
    if(typeof value == 'number'){
      newArr.push(value)
    }
  })
  return newArr.map(value => {
    return value % 3
  })
}

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

// const cubeAndSum1 = [2, 3, 4]
// Expected output: 99
// const cubeAndSum2 = [0, 5, 10]
// Expected output: 1125

// Use the basic test format to create a test suite using Jest
    // describe: Name the test suite appropriately
    // it: Should return the sum of all the numbers cubed.”
    // expect: Invoke the function "totalCubed" with the test variables passed in as arguments
    // toEqual: Pass the expected output as an argument

    describe("totalCubed Method", () => {
      it("should return the sum of all the numbers cubed.", () => {
        const cubeAndSum1 = [2, 3, 4]
        const expected1 = 99
        const cubeAndSum2 = [0, 5, 10]
        const expected2 = 1125
          expect(totalCubed(cubeAndSum1)).toEqual(expected1)
          expect(totalCubed(cubeAndSum2)).toEqual(expected2)
      })
  })


// b) Create the function that makes the test pass.

// Create a function
    // Will name the function "totalCubed"
    // Has 1 parameter that will accept an array, will name this parameter arr
// Within the function
    // Create a variable to hold the total
    // Use the .forEach() higher order method on the array
      // Add the value of each iteration to power of 3 to the 'total' variable
    // return total

const totalCubed = arr => {
  let total = 0
  arr.forEach(value => {
    total = total + Math.pow(value, 3)
  })
  return total
}
