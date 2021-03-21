import { Injectable } from '@angular/core';

@Injectable()
export class Getcompetitor {
    name:String;
    id:String;
    constructor(){
        this.name="";
        this.id = "";
    }
    getname(){
        return this.name;
    }
    getid(){
        return this.id;
    }
    setname(name:String):void{
        this.name = name;
    }
    setid(id:String):void{
        this.id = id;
    }
}
