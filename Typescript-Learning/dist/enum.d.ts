declare enum PaymentStatus {
    success = "SUCCESS",
    Pending = "PENDING",
    Completed = "COMPLETED",
    Failed = "FAILED"
}
declare function checkPayment(status: PaymentStatus): void;
