const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Please Enter Your Name: ', (name) => {
    rl.question('Please Enter Your Wife Name: ', (input2) => {
        rl.question('Please Enter Your Age: ', (age1) => {
            rl.question('Please Enter Your Wife Age: ', (age2) => {
                console.log(`My Name is: ${name}, My Age is: ${age1}, My Wife Name is: ${input2}, My Wife Age is: ${age2}`);
                rl.close();
            })
        })
    })
});


// const args = process.argv.slice(2);

// const name = args[0];
// const age = args[1];

// console.log(`Name: ${name}, Age: ${age}`);
