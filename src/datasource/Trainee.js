import { RESTDataSource } from 'apollo-datasource-rest';
import config from '../config';

export class TraineeApi extends RESTDataSource {

    constructor() {
        super();
        this.baseURL = `${config.serviceUrl}/api/trainee`;
    }

    willSendRequest(request) {
        request.headers.set('Authorization', this.context.token);
    }

    async getAll() {
        return this.get('/getall');
    }

    createTrainee(user) {
        const newTrainee = new Object({ ...user });
        return this.post('/create', newTrainee);
    }

    updateTrainee(user) {
        const traineeupdate = new Object({ ...user });
        return this.put('/update', traineeupdate);
    }

    deleteTrainee(id) {
        const path = '/remove/'.concat(id);
        return this.delete(path);
    }
} 