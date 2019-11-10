import { Request } from "./request";
import { User } from "./user";

export class CheckOut{
    constructor(
        public _id,
        public requests:Request[],
        public belongsTo:String,
        public isPending:Boolean,
    ){}
}