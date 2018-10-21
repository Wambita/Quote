import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TimeAgoPipe } from 'time-ago-pipe';

import { AppComponent } from './app.component';
import { QuoteComponent } from './components/quote/quote.component';
import { QuoteFormComponent } from './components/quote-form/quote-form.component';
import { QuoteDetailsComponent } from './components/quote-details/quote-details.component';
import { TimePassedPipe } from './pipes/time-passed.pipe';
import { HighlighterDirective } from './directives/highlighter.directive';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    QuoteFormComponent,
    QuoteDetailsComponent,
    TimeAgoPipe,
    TimePassedPipe,
    HighlighterDirective
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
