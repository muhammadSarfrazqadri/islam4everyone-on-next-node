import mongoose from "mongoose";

const submissionSchema = new mongoose.Schema({
  title: String,
  content: String,
  type: { type: String, enum: ["article", "naat", "comment"], default: "article" },
  audio: String, // optional for naats
  authorId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  status: { type: String, enum: ["pending", "approved", "rejected"], default: "pending" },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Submission || mongoose.model("Submission", submissionSchema);
