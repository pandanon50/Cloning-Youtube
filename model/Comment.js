import mongoose from "mongoose";

const commnetSchema = new mongoose.Schema({
    text : {
        type : String,
        required : "Text is required"
    },
    createdAt : {
        type: Date,
        default : Date.now
    }
});

const model = mongoose.model("Comment",commnetSchema);

export default model;