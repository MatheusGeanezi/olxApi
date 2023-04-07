import { getUserRepository } from '../repository/getUsersRepository';

export const getUsersService = async () => {
    const data = await getUserRepository();
    return data.length ? data : 'Não há dados'; 

};