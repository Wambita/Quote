import { Component, OnInit } from '@angular/core';
import { Quote } from 'src/app/models/quote/quote';
import { Quotes } from 'src/app/models/quotes/quotes';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = Quotes;
  showForm = false;
  constructor() {}

  ngOnInit() {
    this.getHighest();
  }

  addVote(vote, index) {
    if (vote) {
      this.quotes[index].upvote += 1;
      this.getHighest();
    } else {
      this.quotes[index].downvote += 1;
    }
  }

  getHighest() {
    let highest = 0;
    let highestQuote: Quote;
    for (const quote of this.quotes) {
      if (quote.upvote > highest) {
        highest = quote.upvote;
        highestQuote = quote;
      }
    }
    this.changeHighest(highestQuote);
  }

  changeHighest(highest: Quote) {
    for (const quote of this.quotes) {
      if (quote.id === highest.id) {
        quote.isHighest = true;
      } else {
        quote.isHighest = false;
      }
    }
  }

  deleteQuote(index) {
    const confirmation = confirm('Are you sure?');
    if (confirmation) {
      this.quotes.splice(index, 1);
    }
    this.getHighest();
  }

  toggleForm(toggler: boolean) {
    this.showForm = toggler;
  }
}
