import dbConnect from "@/middleware/mongoose";
import Blog from "@/models/Blog";

async function handler(req, res) {
    if(req.method !== 'POST'){
     return res.status(405).json({message : "This method is not allowed"})
    }

    const {title, slug, thumbnail, content} = req.body;
try{
    const newBlog = new Blog({
        title,
        slug,
        thumbnail,
        content
    })
    await newBlog.save();
    return res.status(201).json({success: true, message : "Blog Added Successfully" })
} catch{
    return res.status(500).json({success: false, message : "Error Occured"})
}
}
export default dbConnect(handler);