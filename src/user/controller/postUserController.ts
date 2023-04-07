import { Request, Response } from 'express';
import { postUserService } from '../services/postUserService';

export const postUser = async (req: Request, res: Response) => {
    try {
        const data = await postUserService(req.body);
        res.json({ status: 200, data: data });
    } catch (error) {
        console.log('error', error);
        res.json({ status: 200, message: 'ocorreu um erro' });
    }

};