import mongoose from "mongoose"
const connections:string = 'mongodb+srv://Painfulpike:Auth123@ecommers.2urvuiw.mongodb.net/?retryWrites=true&w=majority'

// TODO:check this and change any 
const connection:any = {};

async function dbConnect() {
    if (connection.isConnected) {
        return;
    }

    const db = await mongoose.connect(connections);

    connection.isConnected = db.connections[0].readyState;
}

export default dbConnect;