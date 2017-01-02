export class Team {

    name:String;
    abbreviation:String;
    teamname:String;
    shortName:String;
    division:String;
    conference:String;
    image:String;
    isActive:Boolean;

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
