import dbConnect from "@/middleware/mongoose";
import Blog from "@/models/Blog";

async function handler(req, res) {
    if (!req.method === "DELETE") {
        return res.status(405).json({ message: "This Method is not allowed" })
    }
    try {
        const { id } = req.body;
        await Blog.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "Blog Deleted Successfully" })
    }
    catch (error) {
        res.status(500).json({ success: false, message: "Error Deleting Blog." })
    }
}
export default dbConnect(handler)