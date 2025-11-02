
import mongoose from "mongoose"

const connectdb = async () => {

    try {
        let connection = await mongoose.connect(process.env.MONGODB_URL)

        if (connection) {
            console.log("database connected successfully");
        } else {
            console.log("database not connected");
        }

    } catch (error) {
        console.log(error)
    }
}

export default connectdb;