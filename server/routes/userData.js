// Import express Router
import express from 'express';
import Expense from "./models/transactionData.js";
import { transactionData } from "./data/index.js";
const router = express.Router();

// Create a route to insert the data
router.post("/transactions", (req, res) => {
    Expense.insertMany(transactionData)
    .then(() => {
        res.status(200).json({ message: 'Data inserted successfully' });
    })
    .catch((error) => {
        res.status(500).json({ error });
    });
});

// Export the router
export default router;