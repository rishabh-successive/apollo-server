export default {
  loginUser: async (parent, args, context) => {
      const { payload: { email, password } } = args;
      const { dataSources: { userApi } } = context;
      const response  = await userApi.loginUser({ email, password });
             // console.log(response);
             return response.data;
  }
}