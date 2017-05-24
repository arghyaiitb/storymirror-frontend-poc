/**
 * Created by argo on 23/05/17.
 */
export interface Contact {
  name: string;
  id: number;
}


export class Hero {
  constructor(
    public _id: string,
    public name: string,
    public __v: number
  ) { }
}
