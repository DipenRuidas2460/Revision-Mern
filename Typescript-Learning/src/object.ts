let student: {
    userName: string,
    age: number
}

student = {
    userName: "Dipen",
    age: 30
}

console.log(student.userName);
console.log(student.age);


let products: {
    readonly productName: string,
    price?: number
    address: {
        city : string,
        pin:number
    }
}

products = {
    productName : "Laptop",
    price : 60250,
    address:{
        city : "Kolapur",
        pin : 700045
    }
}

products.address.city = "Haripur";

console.log(products.productName);
console.log(products.address.city);

console.log(products);


