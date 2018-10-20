import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ViewChild
} from '@angular/core';
import { Quote } from '../../models/quote/quote';
import { Quotes } from '../../models/quotes/quotes';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  @Output()
  formQuote = new EventEmitter();

  @ViewChild('quoteForm')
  form: any;

  newQuote = new Quote(0, '', '', '');
  constructor() {}

  ngOnInit() {}

  addNewQuote({ value }) {
    this.newQuote.id = Quote.length + 1;
    this.newQuote.createdOn = new Date();
    console.log(this.newQuote);
    Quotes.unshift(value);
    this.form.reset();
  }
}
