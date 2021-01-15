import user from '../../service/user';

export default {
    getMyProfile: () => user.getAll(),
};