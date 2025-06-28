import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quotes',
  imports: [],
  templateUrl: './quotes.html',
  styleUrl: './quotes.css'
})

export class QuotesComponent implements OnInit {
  quote: string = '';

  private quotes = [
    'You make my pupils dilate every time I see you.',
    'Every moment with you is a page in my favorite story.',
    'Your smile is my daily dose of sunshine.',
    'In a world full of noise, you are my calm.'
  ];

  ngOnInit(): void {
    const randomIndex = Math.floor(Math.random()*this.quotes.length);
    this.quote = this.quotes[randomIndex];
  }
}
