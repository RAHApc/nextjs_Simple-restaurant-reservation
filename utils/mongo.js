import mongoose from 'mongoose'

// const MOGODB_URL = process.env.MONGODB_URL;

// if (!MOGODB_URL) {
//     throw new Error('Please define the MONGODB_URL')
// }


let cached = global.mongoose

if (!cached) {
    cached = global.mongoose = {
        conn: null,
        promise: null
    }
}

async function dbConnect() {

    if (cached.conn) {
        return cached.conn;
    }

    if (!cached.promise) {
        const opts = {
            bufferCommands: false
        }

        cached.promise = mongoose.connect(`mongodb://localhost:27017/lama`, opts).then((mongoose) => {
            return mongoose;
        })
    }

    cached.conn = await cached.promise
    return cached.conn
}


export default dbConnect;