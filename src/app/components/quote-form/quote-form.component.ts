import {
  Component,
  OnInit,
  ViewChild,
  Output,
  EventEmitter
} from '@angular/core';
import { Quote } from '../../models/quote/quote';
import { Quotes } from '../../models/quotes/quotes';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  @ViewChild('quoteForm')
  form: any;

  @Output()
  formToggler = new EventEmitter<boolean>();

  newQuote = new Quote(null, '', '', '', null, null, null);
  constructor() {}

  ngOnInit() {}

  addNewQuote({ value }) {
    value.id = Quotes.length + 1;
    value.createdOn = new Date();
    value.upvote = 0;
    value.downvote = 0;
    Quotes.unshift(value);
    this.form.reset();
    this.formToggler.emit(false);
  }
}
