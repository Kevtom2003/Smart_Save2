import mongoose from "mongoose";

const TransactionSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
});

const Transaction = mongoose.model("Transaction", TransactionSchema);
export default Transaction;