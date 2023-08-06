
// ৫. তোমার যদি দুইটা শর্ত পূরণ করতে বলে। এবং দুইটা শর্তের মধ্যে দুইটাই পূরণ করতে হবে। তাহলে তুমি কি সেটা চেক করতে পারবে? একইভাবে যদি বলে তুমি দুইটা শর্তের যেকোন একটা পূরণ করতে পারবে। অর্থাৎ তুমি && এবং || এর ব্যবহার করতে পারো কিনা। যদি পারো তাহলে নিজে নিজে এই রকমের কোড লিখে ফেলো। 



// ৬. তুমি কি একটা শর্ত পালন করলে একটা কিছু করবে। শর্ত পূরণ না করলে অন্য কিছু একটা করবে এমন কোড লিখতে পারবে। অর্থাৎ তুমি কি if-else এর কোড লিখতে পারবে। পারলে একটা কোড লিখে ফেলো।




// && এবং || এর ব্যবহার

// simple condition 

let mangoPrice = 100;
let bananaPrice = 150;

if(mangoPrice > bananaPrice){
    // console.log('I eat mango');
}
else{
    // console.log('I do not eat mango');
}

// &&

let secondMangoPrice = 200;
let secondBananaPrice = 200;

if(secondMangoPrice < secondBananaPrice){
    // console.log('I eat mango');
}
else if(secondMangoPrice > secondBananaPrice){
    // console.log('I eat banana');
}
else if(secondMangoPrice === secondBananaPrice){
    // console.log('I drink water');
}

// &&

let money = 100;
let job = false;
let byke = 1;

if(money === 2000 && job === true){
    console.log('I love you');
}
else if(money === 20000 && byke >= 1){
    console.log('We will go long drive');
}
else if(money < 5000 && job === false || byke === 1){
    console.log('I hate you');
}