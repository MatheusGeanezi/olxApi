import { userType } from '../model/user';
import { postUserRepository } from '../repository/postUserRepository';

export const postUserService = async (body: userType) => {
    return await postUserRepository(body);
};