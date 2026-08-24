// Pass by Value উদাহরণ

function updateNumber(num) {
    num = num + 10; // শুধুমাত্র ফাংশনের ভেতরের কপিতে ১০ যোগ হচ্ছে
    console.log("ফাংশনের ভেতরে num:", num); // আউটপুট: 15
}

let x = 5;
updateNumber(x);

console.log("ফাংশনের বাইরে x:", x); // আউটপুট: 5 (মূল মান পরিবর্তন হয়নি)

// Pass by Reference উদাহরণ

function updatePerson(person) {
    person.age = 30; // একই মেমোরি লোকেশনের অবজেক্টকে পরিবর্তন করা হচ্ছে
    console.log("ফাংশনের ভেতরে age:", person.age); // আউটপুট: 30
}

let user = { name: "Rahim", age: 25 };
updatePerson(user);

console.log("ফাংশনের বাইরে user.age:", user.age); // আউটপুট: 30 (মূল অবজেক্ট পরিবর্তন হয়ে গেছে!)

// Reassigning an Object Reference

function reassignObject(obj) {
    obj = { name: "Karim", age: 40 }; // নতুন মেমোরি ঠিকানায় রি-অ্যাসাইন করা হলো
}
let myObj = { name: "Rahim", age: 25 };
reassignObject(myObj);
console.log(myObj.name); // আউটপুট: "Rahim" (পরিবর্তন হয়নি)