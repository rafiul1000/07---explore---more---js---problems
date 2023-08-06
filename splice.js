const friendsAge = [12, 45, 32, 22, 44, 62, 29, 69, 87];

// Removes elements from an array
// and, if necessary, inserts new elements in their place, 
// returning the deleted elements.
// will change the original array

const partial = friendsAge.splice(5,3, 666, 2222, 33333);
console.log(partial);
console.log(friendsAge);