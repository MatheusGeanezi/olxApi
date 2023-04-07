import { Request, Response } from 'express';
import { getUsersService } from '../services/getUsersService';

export const getUsers = async (req: Request, res: Response) => {
    try {
        const data = await getUsersService();
        res.json({ status: 200, data: data});
    } catch (error) {
        console.log('error', error);
        res.json({ status: 200, message: 'ocorreu um erro' });
    }
};