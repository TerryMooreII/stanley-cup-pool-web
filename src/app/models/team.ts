export class Team {

    name:string;
    abbreviation:string;
    teamname:string;
    shortName:string;
    division:string;
    conference:string;
    image:string;
    isActive:boolean;

    constructor(team){
        if (!team) return;

        this.name = team.name;
        this.abbreviation = team.abbreviation;
        this.teamname = team.teamname;
        this.shortName = team.shortName;
        this.division = team.division;
        this.conference = team.conference;
        this.image = team.image;
        this.isActive = team.isActive;
    }
}
