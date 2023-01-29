import express from "express";
import bodyParser from "body-parser";
// import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
// import helmet from "helmet";
// import morgan from "morgan";
import { MongoClient } from "mongodb";

import transactionRoute from "./routes/userData.js";
import getTransactions from "./controllers/userData.js";
// import generalRoutes from "./routes/general.js";
// import managementRoutes from "./routes/management.js";
// import salesRoutes from "./routes/sales.js";

// data imports
import Expense from "../../models/transactionData.js";
import {
  transactionData
} from "./data/index.js";

/* CONFIGURATION */
const uri = "mongodb+srv://exampleuser:1qaz2wsxWSX@cluster0.rm3v0cj.mongodb.net/?retryWrites=true&w=majority"
const client = new MongoClient(uri)


dotenv.config();
const app = express();
app.use(express.json());
// app.use(helmet());
// app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
// app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

/* ROUTES */
// app.use("/transactions", transactionRoute);
app.get('/api', async (req, res) => {
  try {
      console.log("Hits GET /transactions")
      const transactions = await getTransactions(); //get all transactions
      res.json(transactions); 
  } catch (error) {
    console.log('ERROR')
      res.status(500).send(error.message);
  }
});

app.get('/', (req, res) => {
  res.send('Hi')
})

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

/* MONGOOSE SETUP */
// const PORT = process.env.PORT || 9000;
// mongoose.set("strictQuery", false);
// mongoose
//   .connect(process.env.MONGO_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

//     /* ONLY ADD DATA ONE TIME 
//      AffiliateStat.insertMany(dataAffiliateStat);
//      OverallStat.insertMany(dataOverallStat);
//      Product.insertMany(dataProduct);
//      ProductStat.insertMany(dataProductStat);
//      Transaction.insertMany(dataTransaction);
//      User.insertMany(dataUser);
//      */
//   })
//   .catch((error) => console.log(`${error} did not connect`));

// async function run() {
//   try {
//     const database = client.db("test");
//     const transactions = database.collection("expenses");
//     const transaction = await transactions.find();
//     // since this method returns the matched document, not a cursor, print it directly
//     console.log(transaction);
//   } finally {
//     await client.close();
//   }
// }
// run().catch(console.dir);

