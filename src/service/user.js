class User {
    constructor() {

        this.users = new Map();
        this.id = 0;
    }
    getAll(){
        const details = this.users.values();
        return details;

    }
    
    createUser(users){
        this.id += 1;
        this.users.set(this.id,{ ...users , id : this.id });
        return this.users.get(this.id);
    }

    // updateUser(id,email){
    //     const user = this.user.get(Number(id));
    //     this.users.set(Number(id),{...user,email });
    //     return this.users.get(Number(id));
    // }

    updateUser(users,id) {
        console.log('Inside update method USer');
        const traineeId = this.users.get(Number(id));
        this.users.set(Number(id), {...traineeId, ...users});
        return this.users.get(Number(id));
    }

    deleteUser(id) {
        const deleteRecords = this.users.get(Number(id));
        this.users.delete(Number(id));
        return deleteRecords;
    }
}

export default new User();