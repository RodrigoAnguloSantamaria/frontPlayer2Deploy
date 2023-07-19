export interface playerI{
    _id?:string;
    name:string;
    characteristics:charI;
    image:string;
}
export interface charI{
    position:string;
    team:string;
    championships:number;
    MVPs:number;
}