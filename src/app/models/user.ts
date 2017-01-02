export class User {

    first:string;
    last:string;
    email:string;
    apikey:string;

    constructor(user){
        if (!user.email) return;
        this.first = user.first;
        this.last = user.last;
        this.email = user.email;
        this.apikey = user.apikey;
    }
}
