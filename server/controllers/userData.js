import { MongoClient } from "mongodb";

const uri = "mongodb+srv://exampleuser:1qaz2wsxWSX@cluster0.rm3v0cj.mongodb.net/?retryWrites=true&w=majority"
const client = new MongoClient(uri)

const getTransactions = async () => {
    // try {
    //   console.log('Hi');
    //     const transactions = await Transaction.find({}); //find all the transaction
    //     return transactions;
    // } catch (error) {
    //     throw new Error(`Error fetching transactions: ${error.message}`);
    // }
    let result;
    try {
      // create a new MongoClient instance
      await client.connect(); // connect to the MongoDB server
      console.log("Connected to MongoDB");
  
      const database = client.db("test");
      const transactions = database.collection("expenses");
      const query = { amount: {$gt: 0 } }
      const options = {
        projection: { _id: 0, date: 1, title: 1, category: 1, amount: 1 },
      };
      // const result = await transactions.find().toArray();
      result = await transactions.find(query,options).toArray();
      // since this method returns the matched document, not a cursor, print it directly
    } catch (err) {
      console.error(err);
    } finally {
      await client.close();
      console.log("Connection closed");
      return result;
    }
};

export default getTransactions;