import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const mongodb_uri = `${process.env.MONGODB_URI}`;
const connectDB = async () => {
    try {
        const connection = await mongoose.connect(mongodb_uri);
        console.log('MongoDB connected with host:'.yellow.bold, connection.connection.host.yellow.bold);
    } catch (error) {
        console.log('MongoDB connection failed:'.red.bold, error.red.bold);
        process.exit(1);
    }
}

export default connectDB;