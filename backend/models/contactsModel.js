import mongoose, { mongo } from "mongoose";

const contactSchema = mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String, required:true},
    subject:{type:String, required:true},
    message:{type:String, required:true}
})

const contactModel = mongoose.models.contactSchema || mongoose.model("contactModel", contactSchema);

export default contactModel;