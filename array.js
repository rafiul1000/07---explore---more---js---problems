const country = 'Bangladesh';
const age = 52;
const isIndependent = true;
const student = {id: 121, class: 11, name: 'Agun'};

// ========================================================
const friendsAge = [13, 14, 11, 17, 21, 16, 15, 20];
// Chack array using Array.isArray
console.log(Array.isArray(friendsAge));
// ==========================================================
function add(name1, name2){
    return name1 + name2;
}


console.log(typeof(country));
console.log(typeof(age));
console.log(typeof(isIndependent));
console.log(typeof(student));
console.log(typeof(friendsAge));
console.log(typeof(add));

// ======================================================

console.log(friendsAge.includes(19));
console.log(friendsAge.includes(15));


if(friendsAge.indexOf(19) !== -1) {

}



// concat

const newFriendsAge = [12, 13, 11, 14];
const allFriendsAge = newFriendsAge.concat(friendsAge);
console.log(allFriendsAge);