function Sum(a, b) {
    return function gap() {
        console.log(a + b);
    }
}

// const p = Sum(10, 20);
// p();

function inner(b) {
    console.log("This is inner function", b);
}

function outer(a, b) {
    return inner(b);
}

outer(10, 20);