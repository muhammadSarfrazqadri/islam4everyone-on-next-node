import mongoose from "mongoose";

const nameSchema = new mongoose.Schema({
    name: String,
    meaning: String,
    category: String,
    origin: String,
    gender: String,
    pronunciation: String,
    isQuranic: Boolean,
    popularityRank: Number,
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

export default mongoose.model("Name", nameSchema);
