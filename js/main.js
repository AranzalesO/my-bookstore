import aranzaloch from './aranzaloch.js'
//These are the arrays in wich you can prove my functions:
const stars = ["Betelgeuse", "Sirio", "Pólux", "Aldebarán"];
const planets = [{ category: 'rocky', name: 'Venus' }, { category: 'gaseous', name: 'Jupiter' }, { category: 'outside', name: 'Uranus' }];
const years = [11233, 123123, 342344, 44432, 4, 2342343]


// My foreach
// I print the elements of the array: "stars" in the console
aranzaloch.each(stars, (star) => console.log(star));


// My filter
// We put into a new array the elements with a par position
const getPar = ((index) => index % 2 !== 0)
const filterArray = aranzaloch.filter(stars, getPar);
console.log("The elements that are in a par position in the array " + stars + " are " + filterArray)


// My map
// I'm going to make an array with messages in hexadecimal form randomly ... enjoy it! 
console.log("Now we have my function map with hexadecimal messages:")
const mapArray = aranzaloch.map(stars, (star) => Math.random(star).toString(16).substring(7));
console.log(mapArray);


// My findIndex
// I'm going to return the position of an element equal to it or to it respective position
const getIndex = ((years, index) => years === index)
const indexArray = aranzaloch.findIndex(years, getIndex);
console.log("The element equal to its index or equal to it in " + years + " it's in the position: " + indexArray)


// My contains
// As de definition says, I'm going to return if the element in the array: stars, it's locates in that array by a boolean value
const verify = ((element) => element === "Sirio")
const contains = aranzaloch.contains(stars, verify)
console.log(contains)

// My pluck
// Now I'm going to return the category of the planets in an array
const categories = ((array) => array.category)
const pluck = aranzaloch.pluck(planets, categories)
console.log(pluck)

// My without
// We use the array distances_in_light_years to except the number 123123 
const without = aranzaloch.without(years, 123123);
console.log("The array distances in light years with the elements: " + years + " without the element 123123 is " + without);