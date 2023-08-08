
// এইটা একটু ট্রিকি হতে পারে। একটা array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। তোমার কাজ হচ্ছে সংখ্যা গুলা একটার পর একটা করে চেক করা। এবং সংখ্যা গুলা যদি পজিটিভ সংখ্যা হয়। অর্থাৎ শূন্য বা শূন্যের চাইতে বড় হয় তাহলে সেগুলাকে কোন একটা array এর মধ্যে রাখবে। আর যদি নেগেটিভ সংখ্যা হয়। তাহলে লুপটা স্টপ করে দিবে। এবং লুপ বন্ধ করার আগ পর্যন্ত যতগুলা পজিটিভ সংখ্যা পাওয়া গেছে। সেগুলা রিটার্ন করে দিবে। 


function positiveNumbers(numbers){
    const positiveNumbersIntoArray = [];

    for(const number of numbers){
        if(number >= 0){
            positiveNumbersIntoArray.push(number);
        }else{
            break
        }
    }
    return positiveNumbersIntoArray;
}

const myArrayIs = [5, 10, 15, 20, -21, -22, -23, 25, 30, 35, 40, 45, 50];

const myOutputNunbers = positiveNumbers(myArrayIs);

console.log('My output numbers of array is: ', myOutputNunbers, '.')