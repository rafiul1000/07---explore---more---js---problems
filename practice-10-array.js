// ১০. তোমাকে যদি বলা হয়। একটা array এর মধ্যে ৮০ এর চাইতে বড় সংখ্যা থাকলে সেগুলাকে console log করে দেখাতে সেটা কি তুমি পারবে? তাহলে তুমি সেই কোড করে ফেলো 





const myArr = [20, 30, 80, 90, 50, 100, 120, 65, 95, 45];

// একটা array এর মধ্যে ৮০ এর চাইতে বড় সংখ্যা থাকলে সেগুলাকে console log করে দেখানো ঃ

// using for of

for(const number of myArr ){
    if(number > 80){
        console.log('using for of: ', number);
    }
}


const myarr2 = [20, 30, 80, 90, 50, 100, 120, 65, 95, 45];

// using for

for(let i = 0; i < myArr.length; i++){
    if (myArr[i] > 80){
        console.log('using for: ', myArr[i]);
    }
}
