import dbConnect from "@/middleware/mongoose";
import Admin from "@/models/Admin";
import CryptoJS from "crypto-js";
async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }
    const { email, password } = req.body;
    if (!email && !password) {
        return res.status(400).json({ message: 'Email and password are required' });
    }
    try {
        let admin = await Admin.findOne({email})
        if (!admin) {
            return res.status(404).json({success:false, message: "Admin not Found" })
        }
        const hashedPassword = CryptoJS.SHA256(password).toString();
        if (admin.password !== hashedPassword) {
            return res.status(401).json({ success:false, message: "Invalid Email Id or Password" })
        }
        return res.status(200).json({success:true, message: "Admin found, Login Successful"})
    }
    catch (error) {
        return res.status(500).json({message: "Something went wrong"})
    }
}
export default dbConnect(handler)