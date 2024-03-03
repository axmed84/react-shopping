import mongoose from "mongoose";

import { dbURL } from "./config.js";
import chalk from "chalk";

const connectDb = async () => {

    try{
        // success
        await mongoose.connect(dbURL);
        console.log(`connected to the database: ${chalk.green.bold(dbURL)}`)
    } catch (error) {
        // error
        console.log(`error connecting to the database ${error}`)
        process.exit(1)
    }
}

export default connectDb