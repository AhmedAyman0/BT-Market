import { User } from "./user";
import { Item } from "./item";

export class Shop {
    constructor(
        public _id:String,
        public name:String,
        public imgUrl:String,
        public items:Item[],
        public belongsTo:User,
    ){}
}