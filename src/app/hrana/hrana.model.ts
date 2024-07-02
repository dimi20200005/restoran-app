import { Restoran } from "../restorani/restoran.model";

export class Hrana {
  restoran?: Restoran;
  cena?: number;
  public userId?:string;



  constructor(public id:string,public naziv:string,public sastojci:string,public kolicina:string,public imageUrl:string,public tipHrane: string){
    
  }
    
  }