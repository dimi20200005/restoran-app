import { Restoran } from "../restorani/restoran.model";

export class Hrana {
  restoran?: Restoran;
  cena?: number;


  constructor(public id:string,public naziv:string,public sastojci:string,public kolicina:string,public imageUrl:string,public userId:string,public tipHrane: string){
    
  }
    
  }