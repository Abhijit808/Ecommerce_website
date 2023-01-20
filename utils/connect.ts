import mongoose from "mongoose"

// TODO:check this and change any 
const connection:any = {};

async function dbConnect() {
    if (connection.isConnected) {
        return 0;
    }

    const db = await mongoose.connect(process.env.MONGO_URI as string);
    connection.isConnected = db.connections[0].readyState;
}
export default dbConnect