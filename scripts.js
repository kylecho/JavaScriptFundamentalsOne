
//Use this file to implement Part One of your project

// Objects
var animal = {};

animal.username = 'Tiger';

// console.log(animal.username);

animal['tagline'] = 'Tiger is strong!';

// console.log(animal.tagline);

var noises = [];

animal.noises = noises;

// animal;
// => Object {username: "pig", tagline: "piggy!", noises: Array[0]}

var counter = 0;
for (var key in animal) {
	if (key === 'username') console.log('Hi, my name is ' + animal[key]);
	if (key === 'tagline') console.log('I like to say ' + animal[key]);
	counter++;
}

// What happends  if you return 'Hi my name is ' + ___
// instead of using console.log() inside the loop?
//for (var key in animal) {
	//if (key === 'username') return 'Hi my name is Kyle';
	//if (key === 'tagline') console.log('I like to say ' + animal[key]);
	//counter++;
	//array[++counter]; // 0 evaluate before
	//array[counter++]; // evaluate after
//}

// it gives SyntaxError: Illegal return statement.

/**
 * Review
 * What are the different ways you can add properties and values to objects? 1. Object literal, 2. dot notation, 3. bracket notation.
 * Which of these methods would you use if you wanted to add a property to an object that had a weird symbol (think '&')? a bracket notation.
 * What about if the property is a variable, how does that change the syntax? ?????
 */

//-----------------------------------------------------------------//

// Arrays
// create an array literal with one element.
var noiseArray = ['wow'];

// add a noise to the beginning of the array.
noiseArray.unshift('hey');

// add another noise to the end of the array.
noiseArray.push('hooray');

// using bracket notation add another noise to the end.
noiseArray[noiseArray.length] = 'whoohoo';

// inspect the array.
// length?
noiseArray.length;
// => 4
// last index?
noiseArray[noiseArray.length-1];
// => 3 (the diff is that it's 1 less)

console.log(noiseArray);
// => ['hey', 'wow', 'hooray', 'whoohoo']

// nest the Array in the Object
animal.noises = noiseArray;
// using a bracket notation
animal['noises'] = noiseArray;

// Review
// What are the different ways you can add properties and values to arrays?
// => 1. using methods, unshift, push, splice.
// => 2. array literals
// => 3. array index with bracket notation
// comeup with two ways you can add an element to the end of the array
// => 1. using push() method
// => 2. array[array.length] = 'something';

// Animal Collection
// create a var called animals with an empty array.
var animals = [];

// add your animal to the animals array.
animals.push(animal);

// create a var called quackers and assign some values
var quackers = {
	username: 'DaffyDuck',
	tagline: 'Yippeee!',
	noises: ['quack', 'honk', 'sneeze', 'growl']
};

// add quackers to the animals using different method than before.
animals.push(quackers);

// inspect your animal array.
console.log(animals);

var rabbit = {};
rabbit.username = 'Rabbit';
rabbit.tagline = 'Rabbit eats grass';
rabbit.noises = 'nothing';

animals.push(rabbit);

var dog = {
	username: 'Dog',
	tagline: 'Dog is our friend',
	noises: 'Bowwow'
};

animals.push(dog);

// animals length
console.log(animals.length);
// animals;
console.log(animals);

//--------------------------------------------------------------------//

// Function

// Q1
var AnimalTestUser = function (username) {
	return { username: username };
};


// Q2
var AnimalTestUser = function (username) {
	var obj = { username: username };
	obj.otherArgs = [];

	for (var i = 1; i < arguments.length; i++) {
		obj.otherArgs.push(arguments[i]);
	}

	return obj;

};

// Q3
function AnimalCreator(username, spiecies, tagline, noises, friends) {
	var friends = [];
	var animal = {
		username: username,
		spiecies: spiecies,
		tagline: tagline,
		noises: noises,
		friends: friends
	};
	return animal;
}


var sheep = AnimalCreator('Cloud', 'sheep', 'You can count on me!', ['baahhh', 'arrgg', 'chewchewchew']);
console.log(sheep);
      // { username: 'Cloud', 
      //  species: 'sheep', 
      //  tagline: 'You can count on me!', 
      //  noises: ['baahhh', 'arrgg', 'chewchewchew'], 
      //  friends: []
      // }

// Q4
function addFriend (animal, friend) {
	if (animal.friends) {
		animal.friends.push(friend);
	}
}

// Q5
function addFriend (animal, friend) {
	if (animal.friends) {
		animal.friends.push(friend.username);
	}
}

// Q6
var myFarm = [
	{
		username: 'Sky',
		spiecies: 'Rabbit',
		tagline: 'I like jumping!',
		noises: ['haha', 'heehee'],
		firneds: []
	},
	{
		username: 'Tigger',
		spiecies: 'Tiger',
		tagline: 'I am strong!',
		noises: ['Grrrr', 'grrrrrr!'],
		firneds: []
	},
	{
		username: 'Poo',
		spiecies: 'Bear',
		tagline: 'I am your friend',
		noises: ['wowo', 'whwhwh'],
		firneds: []
	}
];

addFriend(myFarm[0], myFarm[1]);
addFriend(myFarm[1], myFarm[2]);
addFriend(myFarm[2], myFarm[0]);

console.log(myFarm);

// Q7



































