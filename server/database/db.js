import mongoose from 'mongoose';

export const Connection= async(username,password)=>{
    const URL=`mongodb://${username}:${password}@ac-v4dwcnh-shard-00-00.0eqmbzk.mongodb.net:27017,ac-v4dwcnh-shard-00-01.0eqmbzk.mongodb.net:27017,ac-v4dwcnh-shard-00-02.0eqmbzk.mongodb.net:27017/?ssl=true&replicaSet=atlas-hb0634-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URL,{ useNewUrlParser: true });
        console.log('Database connected successfully');
    }catch (error){
        console.log('Error while connecting with the database', error);
    }
};

export default Connection;

// ${username}:${password}