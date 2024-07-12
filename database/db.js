import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL =`mongodb+srv://admin:admin@blog-app.jf6wryc.mongodb.net/`;
    console.log(URL);
    try {
        console.log('MongoDB before');
        await mongoose.connect(URL, { useNewUrlParser: true ,useUnifiedTopology: true,maxPoolSize: 10,socketTimeoutMS: 30000, keepAlive: true})
        console.log('MongoDB is connected');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;
