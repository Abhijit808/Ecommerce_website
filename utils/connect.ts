import mongoose from "mongoose"

// TODO:check this and change any 
const connection:any = {};

async function dbConnect() {
    if (connection.isConnected) {
        return;
    }

    const db = await mongoose.connect(process.env.MONGO_URI);

    connection.isConnected = db.connections[0].readyState;
}

export default dbConnect;