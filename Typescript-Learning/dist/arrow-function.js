"use strict";
// Normal function is first-class citizens in JavaScript,
// which means they can be assigned to variables, passed as arguments to other functions,
// and returned from functions.
// Arrow functions are a more concise syntax for writing functions in JavaScript.
// They are often used as callbacks or for short, single-expression functions.
// JavaScript - এ Hoisting(হয়েস্টিং) এবং Execution Context - এর মেমরি বরাদ্দের পার্থক্যের কারণেই এই ঘটনাটি ঘটে।
// ১. Normal Function(Function Declaration)
// JavaScript কোড রান করার সময় মূলত দুটি ধাপে কাজ করে: Creation Phase এবং Execution Phase।
// Creation Phase - এ JavaScript ইঞ্জিন normal function-এর নাম এবং পুরো কোড ব্লক(Function Body) - 
// কে মেমরিতে তুলে নেয়(Hoist করে)।
// ফলে কোড চলার আগেই ফাংশনটি ব্যবহারের জন্য প্রস্তুত থাকে। তাই কোডে ঘোষণার আগেই এটি কল করা সম্ভব হয়।
// show(); 
// function show() {
//     console.log("Hello World");
// }
// const show = () => {
//     console.log("Hello World");
// }
// show();
const createSum = (a, b) => {
    return a + b;
};
console.log(createSum(5, 10)); // Output: 15
const createSquare = (x) => x * x;
console.log(createSquare(87)); // Output: 7569
const nums = [1, 2, 3, 4, 5];
const double = nums.map(num => num * 2);
console.log(double);
