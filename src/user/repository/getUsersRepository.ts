import user from '../model/user';
export const getUserRepository = async () => {
    return await user.find({});
};