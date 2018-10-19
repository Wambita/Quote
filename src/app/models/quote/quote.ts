export class Quote {
  upvote: number;
  downvote: number;
  createdOn: Date;
  constructor(
    public id: number,
    public quote: string,
    public author: string,
    public subBy: string
  ) {
    this.upvote = 0;
    this.downvote = 0;
    this.createdOn = new Date();
  }
}
