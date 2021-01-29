import config from "./../config/config";
import app from "./express";
import { MongoClient } from "mongodb";
import mongoose from "mongoose";

const url = process.env.MONGODB_URI || "mongodb://localhost:27017/mernSimpleSetup";
MongoClient.connect(url, (err, db) => {
    console.log("Connected successfully to mongodb server");
    db.close();
})

app.listen(config.port, (err) => {
    if (err) {
        console.log(err);
    }
    console.info(`Server started on port ${config.port}`);
})

mongoose.Promise = global.Promise;
mongoose.connect(config.mongoUri, { useNewUrlParser: true,
                                    useCreateIndex: true,
                                    useUnifiedTopology: true } );

mongoose.connection.on("error", () => {
    throw new Error(`Unable to connect to database: ${mongoUri}`)
})