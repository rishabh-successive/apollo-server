import userInstance from '../../service/user';
import instancePubSub from '../pubsub';
import constant from '../../lib/constant';

export default {
    createTrainee: async (parent,args,context)=>{
        const {user} = args;
        const { dataSources: { traineeApi } } = context;
        const response = await traineeApi.createTrainee(user);
        instancePubSub.publish(constant.subscriptions.TRAINEE_ADDED, { traineeAdded: response.data.data });
        return response.data.data;
        // const newTrainee = userInstance.createUser(user);
        // instancePubSub.publish(constant.subscriptions.TRAINEE_ADDED, { traineeAdded: newTrainee });
        // return newTrainee;
    },

    updateTrainee: async (parent , args ,context ) => {
       const { user } = args;
    //    const updateTraine = userInstance.updateUser(user);
    //    instancePubSub.publish(constant.subscriptions.TRAINEE_UPDATED, { traineeUpdated: updateTraine });
    //     return updateTraine;
    const { dataSources: { traineeApi } } = context;
    const response = await traineeApi.updateTrainee(user);
    instancePubSub.publish(constant.subscriptions.TRAINEE_UPDATED,
        { traineeUpdated: response.data.Details });
      return response.data.Details;
    },

    deleteTrainee: async (parent,args,context) => {
        const { id } = args;
        // const deleteTraine = userInstance.delete(id);
        // instancePubSub.publish(constant.subscriptions.TRAINEE_DELETED, { traineeDeleted: deleteTraine.id });
        // return deleteTraine;
        const { dataSources: { traineeApi } } = context;
        const response = await traineeApi.deleteTrainee(id);
        instancePubSub.publish(constant.subscriptions.TRAINEE_DELETED,
            { traineeDeleted: response.data.id },
            );
            return response.data.id;

    },
 };