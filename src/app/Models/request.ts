export class Request{
    constructor(
        public _id:String,
        public isPending:Boolean,
        public from:String,
        public to:String,
        public checkOut:String,
    ){}
}