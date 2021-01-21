const { RESTDataSource } = require('apollo-datasource-rest');
import  config  from '../config';

export class UserApi extends RESTDataSource {

    constructor() {
        super();
        this.baseURL = `${config.serviceUrl}/api/user`;
    }

    willSendRequest(request) {
        request.headers.set('Authorization', this.context.token);
    }

    getMe() {
        return this.get('/me');
    }



    loginUser(payload) {
        return this.post('/login', payload);
    }

}
