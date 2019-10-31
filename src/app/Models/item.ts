import { User } from "./user";
import { Shop } from "./shop";

export class Item {
    constructor(
        public _id:String,
        public name:String,
        public imgUrl:String,
        public description:String,
        public count:Number,
        public inStock:Boolean,
        public shop:Shop

    ){}
}