export class Coffee {
  notApproved = false;

  constructor(
    public type: string,
    public greenBeanScore: number,
    public sensorialScore: number
  ) { }
}
