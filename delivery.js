// 1
var petArray = ["cat", "cow", "dog"];

// 2
console.log(petArray[1]);

// 3
petArray.push("sheep");

// 4
console.log(petArray.length);

// 5
var catObject = {
    name: "Meow",
    colour: "Black",
    age: 2
}

// 6
console.log(catObject.age);

// 7
var catArray = [
    {
        name: "Meow",
        colour: "Black",
        age: 2
    }
];

// 8
for (var i = 0; i < catArray.length; i++) {
    console.log(catArray[i].name);
    console.log(catArray[i].colour);
    console.log(catArray[i].age);
}

// 9
function logToConsole(input){
    console.log(input);
}

// 10
logToConsole("donkey");