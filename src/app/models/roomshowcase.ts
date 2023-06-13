export class RoomShowcaseModel{

    public title : string = "";
    public desc : string = "";
    public imgLinks : string[] = [];
    public loc : string = "";
    public price : number = 0.1;
    public rating : number = 0.1;

    constructor(tit:string, des:string,img:string[],loc:string,pri:number, rat:number){
        this.title = tit;
        this.desc = des;
        this.imgLinks = img;
        this.loc = loc;
        this.price = pri;
        this.rating = rat;
    }

  
}