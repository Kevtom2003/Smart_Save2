import express from "express";
import getTransactions from "../controllers/userData.js";

const router = express.Router();

router.get("/transactions", async (req, res) => {
  try {
      console.log("Hits GET /transactions")
      const transactions = await getTransactions(); //get all transactions
      res.json(transactions); 
  } catch (error) {
    console.log('ERROR')
      res.status(500).send(error.message);
  }
});

export default router;