
export interface Food {
    _id:string;
    name: string;
    _type: "food";
    image: {
        _type: string; 
        asset: {
          _ref: string;
          _type: string;
        };
    };
    price:number;
    discription:string;
    category:string;
    tags:string;
    slug:{
        _type:"slug"
        current:string;
    }
    inventory:number;
    
}