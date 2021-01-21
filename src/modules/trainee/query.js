import user from '../../service/user';

export default{
   // getAll: () => user.getAll(),
   getAll: async (parent, args, context) => {
    const { dataSources: { traineeApi } } = context;
    const response = await traineeApi.getAll();
    return response.data.records;
  },
}
