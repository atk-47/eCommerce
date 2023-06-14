import mongoose from "mongoose";
import colors from 'colors';

const connectDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URL);
        console.log(`Connected to MongoDB ${connection.connection.host}`.bgGreen.white);
    }
    catch (error) {
        console.log(`ERROR in MongoDB ${error}`.bgRed.white);
    }
}

export default connectDB;