import { Shop } from "./shop";

export class Category{
    constructor(
        public name:String,
        public _id:String,
        public imgUrl:String,
        public shops:Shop[]
    ){

    }
}