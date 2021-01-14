import user from '../../service/user';

export default {
    getProfile: () => user.getAll(),
  };