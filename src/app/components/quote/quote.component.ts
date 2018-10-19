import { Component, OnInit } from '@angular/core';
import { Quote } from 'src/app/models/quote/quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(0, 'I am a quote', 'sam', 'carlos'),
    new Quote(0, 'I am a quote too', 'carlos', 'sam')
  ];

  constructor() {}

  ngOnInit() {}
}
