import mongoose from "mongoose";
import shortid from "shortid";

const UrlSchema = new mongoose.Schema({
  originalUrl: {
    type: String,
    required: true
  },
  urlCode: {
    type: String,
    default: shortid.generate
  },
  views: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const UrlModel = mongoose.model("Url", UrlSchema);

export default UrlModel;
