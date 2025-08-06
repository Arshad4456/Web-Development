import mongoose from "mongoose";

const dummySchema = new mongoose.Schema({
    name: String,
    // title: {type:String, required: true, default: "Hey"},
    salary: Number,
    language: String,
    city: String,
    isManager: Boolean
});

export const dummy = mongoose.model('Employee', dummySchema)