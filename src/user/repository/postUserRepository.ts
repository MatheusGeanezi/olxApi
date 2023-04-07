import user from '../model/user';

export const postUserRepository = async (body: object) => {
    return await user.create(body);
};