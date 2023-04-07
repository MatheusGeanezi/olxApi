import express , {Request, Response} from 'express';
import path from 'path';
import dotenv from 'dotenv';
import fileUpload from 'express-fileupload';
import cors from 'cors';
import { mongoConnect } from './database/mongo';
import user from './user/routes';

dotenv.config();

mongoConnect();

const server = express();

server.use(cors());
server.use(express.static(path.join(__dirname,'../public')));
server.use(express.urlencoded({extended: true}));
server.use(express.json());
server.use(fileUpload());

server.use(user);

server.use((req: Request, res: Response) =>{
    res.status(404);
    res.json({error: 'pagina nao encontrada'});
});

server.listen(process.env.PORT);
