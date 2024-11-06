import dbConnect from "@/middleware/mongoose";
import Blog from "@/models/Blog";

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '5mb',
    },
  },
};

async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: "This method is not allowed" })
    }

    const { title,
        slug,
        thumbnail,
        paragraph1,
        paragraph2,
        paragraph3,
        hyperlink,
        bulletpoint1,
        bulletpoint2,
        bulletpoint3,
        conclusion } = req.body;
    try {
        const newBlog = new Blog({
            title,
            slug,
            thumbnail,
            paragraph1,
            paragraph2,
            paragraph3,
            hyperlink,
            bulletpoint1,
            bulletpoint2,
            bulletpoint3,
            conclusion
        })
        await newBlog.save();
        return res.status(201).json({ success: true, message: "Blog Added Successfully" })
    } catch {
        return res.status(500).json({ success: false, message: "Error Occured" })
    }
}
export default dbConnect(handler);