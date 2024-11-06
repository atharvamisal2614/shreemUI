import dbConnect from "@/middleware/mongoose";
import Admin from "@/models/Admin";
import CryptoJS from "crypto-js";
 async function handler(req, res){
    if(req.method !== "PATCH") {
        return res.status(405).json({message : "This Method is not allowed..."})
    }
    const {currentPassword , newPassword, birthyear } = req.body;
    const hashedCurrentPassword = CryptoJS.SHA256(currentPassword).toString();
    const hashedNewPassword = CryptoJS.SHA256(newPassword).toString();
    const hashedBirthYear =  CryptoJS.SHA256(birthyear).toString();
    const admin = await Admin.findOne({}).lean();
    if(!admin){
        return res.status(404).json({message : "User not found"})
    }
    if((admin.password !== hashedCurrentPassword || admin.birthyear !== hashedBirthYear)) {
        return res.status(401).json({success : false, message : "Invalid current password"})
    }
    await Admin.findOneAndUpdate({}, {password : hashedNewPassword})
    return res.status(200).json({success : true,message : "Password updated successfully!"})
}
export default dbConnect(handler);



