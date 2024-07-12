import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL =`mongodb+srv://admin:admin@blog-app.jf6wryc.mongodb.net/`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true ,useUnifiedTopology: true,poolSize: 10,socketTimeoutMS: 30000, // Adjust as needed
  keepAlive: true})
        console.log('MongoDB is connected');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;
