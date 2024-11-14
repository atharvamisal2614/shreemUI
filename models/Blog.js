import mongoose from "mongoose";
const BlogSchema = new mongoose.Schema({
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    thumbnail: { type: String },
    paragraph1: { type: String, required: true },
    paragraph2: { type: String },
    paragraph3: { type: String },
    hyperlink: { type: String },
    bulletpoint1: { type: String },
    bulletpoint2: { type: String },
    bulletpoint3: { type: String },
    bulletpoint4: { type: String },
    bulletpoint5: { type: String },
    bulletpoint6: { type: String },
    bulletpoint7: { type: String },
    bulletpoint8: { type: String },
    bulletpoint9: { type: String },
    conclusion: { type: String }
}, { timestamps: true })

export default mongoose.models.Blog || mongoose.model("Blog", BlogSchema)