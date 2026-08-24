const test = [109, 20, 398, 487, 50, 6, 70, -8, -90, 10];

for (let i = 0; i < test.length; i++) {
    if (test[i] === 50) {
        continue;
    }

    console.log(test[i]);

    if (test[i] === 70) {
        break;
    }

    console.log(test[i]);
}
