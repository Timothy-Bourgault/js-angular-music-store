import { Cd } from './cd.model';

export class User {
  public orderTotal: number = 0;
  public albums: Cd [] = [];
  public itemCount = 0;
  public isAdmin: boolean = false;
}
