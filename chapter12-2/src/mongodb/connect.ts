import {MongoClient} from "mongodb";

export const connect = (mongoUrl: string = 'mongodb://user:user@localhost:27017/ch12-2') =>
    MongoClient.connect(mongoUrl, {useNewUrlParser: true, useUnifiedTopology: true})