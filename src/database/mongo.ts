import { connect } from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export const mongoConnect = async () => {

    try {
        await connect(process.env.DATABASE as string);
        console.log('database connected');

    } catch (error) {
        console.log('error', error);

    }

};