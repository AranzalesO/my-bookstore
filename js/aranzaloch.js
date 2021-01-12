let aranzaloch = {}

// For this section we just go through an array and we just make iteratios as if we would have simple for loops,
// but making operations
aranzaloch.each = (array, callback) => {
    for (let i = 0; i < array.length; i++) {
        callback(array[i]);
    }
}

/*
    For the filter I'm going to use the callafter to create a new array with the par positions in an array,
    for this i'm going to verify that I pass the index to the callback to return the position of the array
*/
aranzaloch.filter = (array, callback) => {
    let newArray = [];
    for (let j = 0; j < array.length; j++) {
        if (callback(j)) {
            newArray.push(array[j])
        }
    }
    return newArray;
}

/*
    For the map we pass through the array as a foreach and create a new array to modify things in the array that we have,
    so I verify that the callback receives the array and create a new array with the specs that we have in the main
    script, so the difference we have betwwen these two functions is that this returns a new array and the foreach no
*/
aranzaloch.map = (array, callafter) => {
    let new_Array = [];
    for (let i = 0; i < array.length; i++) {
        if (callafter(array[i])) {
            new_Array.push(callafter(array[i]))
        }
    }
    return new_Array;
}

/*
    The findIndex() method returns the index of the first element in an array that pass a test (provided as a function).
*/
aranzaloch.findIndex = (array, callback) => {
    for (let x = 0; x < array.length; x++) {
        let index = 0;
        if (callback(array[x], x)) {
            return index = x;
        }
    }
}

/*
    The contains returns True if the value that you give is present in the array
*/
aranzaloch.contains = (array, callback) => {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            return true;
        }
    }
    return false;
}

/* 
    The _.pluck() function is used when we need to extract a list of a given property. Like we have to find out the name of all the students, 
    then we can simply apply the _.pluck() function on the details of all the students.
*/
aranzaloch.pluck = (array, callback) => {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.push(callback(array[i]))
    }
    return newArray;
}

/* 
    The without method returns a copy of the array with all instances of the values removed.
*/
aranzaloch.without = (array, number) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === number) {
            array.splice(i, 1);
        }
    }
    return array;
}

export default aranzaloch