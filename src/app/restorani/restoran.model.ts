export class Restoran {
    constructor(
    public id: string,
    public naziv: string,
    public lokacija: string,
    public slikaUrl: string,
    public ocena: number,
    public brojOcena: number,
    public sajt: string
    ){}
  }