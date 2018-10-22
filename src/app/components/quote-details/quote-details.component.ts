import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from 'src/app/models/quote/quote';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
  @Input()
  quote: Quote;

  @Output()
  vote = new EventEmitter<boolean>();

  voteAdd(voteCount: boolean) {
    this.vote.emit(voteCount);
  }

  constructor() {}

  ngOnInit() {}
}
