import mongoose from "mongoose";

const MONGO_URL = process.env.MONGO_URI
if (!MONGO_URL) {
    console.log("Please enter MONGO_URI in .env.local")
}
const dbConnect = (handler) => async (req, res) => {
    if (mongoose.connections[0].readyState) {
        return handler(req, res)
    }

    await mongoose.connect(MONGO_URL)
    console.log("MongoDB Connection established successfully!")
    return handler(req, res)
}
export default dbConnect;