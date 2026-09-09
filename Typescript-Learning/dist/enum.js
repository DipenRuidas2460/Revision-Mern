"use strict";
// Enum in TypeScript
// enum Direction {
//     Up="East",
//     Down="West",
//     Left="North",
//     Right="South"
// }
// console.log(Direction.Up);    // Output: "East"
// console.log(Direction.Down); // Output: "West"
// console.log(Direction.Left);  // Output: "North"
// console.log(Direction.Right); // Output: "South"
// enum StatusCodes {
//     Success = 200,
//     NotFound = 404,
//     InternalServerError = 500
// }
// console.log(StatusCodes.Success); // Output: 200
// console.log(StatusCodes.NotFound); // Output: 404
// console.log(StatusCodes.InternalServerError); // Output: 500
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus["success"] = "SUCCESS";
    PaymentStatus["Pending"] = "PENDING";
    PaymentStatus["Completed"] = "COMPLETED";
    PaymentStatus["Failed"] = "FAILED";
})(PaymentStatus || (PaymentStatus = {}));
function checkPayment(status) {
    console.log(status);
}
checkPayment(PaymentStatus.Failed); // Output: "FAILED"
