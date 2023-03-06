/*1. What are the differences between mutating array methods and non-mutation array methods in JavaScript. List 5 array methods that fall under each of them

The diference between both is that, Mutation Array methods alow us  to  change the inicitial state of our array, mutate thge original array.
Exemples: Push(), shift(), splice(), unshift().

Whereas, no-mutation array methods allow us to just performe some operation on arrays, not guiving chance to edit or change the object.
Exemples: indexOf(), concat(), map(), slice(), filter()*/


//2. Here is an array of languages: [‘C#’, ‘JavaScript’, ‘Ruby’, ‘PHP’, ‘Python’]. Perform this operation on them

languages = ["C#", 'JavaScript', 'Ruby', 'PHP', 'Python'];
console.log(languages);

//Adding 'Kotlin" to the end of the array
languages.push('Kotlin')
console.log(languages);

//adding 'Java' after 'Ruby'
languages.splice(3, 0, 'Java');
console.log(languages);

//Removing the first item
languages.shift(languages);
console.log(languages);

//Adding 'Scala' and ‘Swift’ to the beginning of the array
languages.unshift('Scala', 'Swift');
console.log(languages);

// Replacing 'PHP' with ‘Go’ and ‘Rust’
languages.splice(5,1, 'GO', 'Rust');
console.log(languages);


//3. After calling the function ChangeFruit the value of fruit will be  ['apple', 'mango', 'banana'].


//4. Write a function that accepts an array of numbers as an argument. Return the maximum value in the array.

function maxValue(numbers){
    let max = 0;
    for(let i=0; i<numbers.length; i++){
        if(numbers[i] > max){
            max = numbers[i];
        }
    }

    console.log("The maximium value is "+ max);
}

numb = [20,2,7,8,15,8];
maxValue(numb);


//5. Write a function called valTimesIndex which accepts an array of numbers and returns a new array with each value multiplied by the index it is at in the array:

function valtimesIndex(numArray){
    for(let i=0; i<numArray.length; i++){
        numArray[i] = numArray[i]*i;
    }
    return numArray;
}

console.log(valtimesIndex(numb));