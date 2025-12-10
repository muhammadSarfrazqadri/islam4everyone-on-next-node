import mongoose from "mongoose";

const naatSchema = new mongoose.Schema({
    title: String,
    poet: String,
    lyrics: String,
    category: String
});

export default mongoose.model("Naat", naatSchema);
