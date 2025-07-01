import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { QuoteService } from '../../services/quote';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quotes',
  imports: [CommonModule],
  templateUrl: './quotes.html',
  styleUrls: ['./quotes.css']
})

export class QuotesComponent implements OnInit {
  quote: string = '';

  constructor(
    private quoteService: QuoteService,
    private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {

      this.quoteService.getQuotes().subscribe((quoteData) => {
      // console.log('Quotes loaded:', quoteData)
      // const randomIndex = Math.floor(Math.random() * quoteData.length);
      // console.log('Random index:', randomIndex);
      // this.quote = quoteData[randomIndex];
      // console.log('Selected quote:', this.quote);

      if (Array.isArray(quoteData) && quoteData.length > 0) {
        const randomIndex = Math.floor(Math.random() * quoteData.length);
        this.quote = quoteData[randomIndex];
        console.log('Type of quote:', typeof this.quote);
        console.log('Selected quote:', this.quote);
      } else {
        this.quote = 'Hold on babe, Writing more lines for you...';
      }

      this.cdr.detectChanges();
    });
  }
}