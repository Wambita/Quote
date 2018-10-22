export class Quote {
  isHighest: boolean;
  constructor(
    public id: number,
    public quote: string,
    public author: string,
    public subBy: string,
    public upvote: number,
    public downvote: number,
    public createdOn: Date
  ) {
    this.isHighest = false;
  }
}
