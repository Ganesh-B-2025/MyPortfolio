import mongoose from "mongoose";

const connectDB = async () => {
    await mongoose.connect('mongodb+srv://root:cNqPKQiET9qfpdWl@cluster0.i9s9d.mongodb.net/portfolio-contacts')
    .then(() => {
        console.log(`DB Connected`);
    })
}

export default connectDB;