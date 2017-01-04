export class User {
    _id:string;
    first:string = '';
    last:string = '';
    email:string = '';
    apikey:string= '';
    password:string;

    constructor(user?){
        if (!user) return;
        this._id = user._id;
        this.first = user.first;
        this.last = user.last;
        this.email = user.email;
        this.apikey = user.apikey;
        this.password = user.password;
    }
}
