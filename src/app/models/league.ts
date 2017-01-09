import {User} from "./user";
export class League {

    _id:string;
    name:string;
    year:number;
    members:Array<User>;
    points:any;

    constructor(league?){
        if (!league) {
            this.name = '';
            this.year = new Date().getFullYear();
            this.members = [];
            this.points = {};
            this.points.one = 2;
            this.points.two = 4;
            this.points.three = 8;
            this.points.four = 16;
            return;
        }

        this._id = league.id;
        this.name = league.name;
        this.year = league.year;
        this.members = league.members.map(user => new User(user));
        this.points = league.points;
    }
}
