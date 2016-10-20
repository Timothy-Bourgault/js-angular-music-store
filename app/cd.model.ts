export class Cd {
  public quantity: number = 20;
  public static instances = 0;
  public id: number;
  constructor(public artist: string, public albumName: string, public genre: string, public price: number, public imageUrl: string) {
    Cd.instances++;
    this.id = Cd.instances;
  }
}
