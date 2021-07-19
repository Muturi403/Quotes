import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[] = [
    new Quote('Things change. And friends leave. Life does not stop for anybody.','Faith Muturi', 'Stephen Chbosky',new Date(2021,6,16),0,0),
    // new Quote('Everyone thinks of changing the world, but no one thinks of changing himself.', 'Faith Muturi', 'Leo Tolstoy', new Date(2021, 6, 16), 0, 0),
    // new Quote('Grief does not change you, Hazel. It reveals you.', 'Faith Muturi', 'John Green', new Date(2021, 6, 16), 0, 0),
    // new Quote('It is only after you’ve stepped outside your comfort zone that you begin to change, grow, and transform.', 'Faith Muturi', 'Roy T. Bennett', new Date(2021, 6, 16), 0, 0),
    // new Quote('Yesterday I was clever, so I wanted to change the world. Today I am wise, so I am changing myself.', 'Faith Muturi', 'Rumi', new Date(2021, 6, 16), 0, 0),
    // new Quote('You can not stop the future, You can not rewind the past.The only way to learn the secret is to press play.', 'Faith Muturi', 'Jay Asher', new Date(2021, 6, 16), 0, 0)
  ]; 
  get sortQuotes() {
    return this.quotes.sort((a, b) => {
      return <any>new Date(b.publishDate) - <any>new Date(a.publishDate);
    });
  }
  currentValue: number;
  newValue: number;
  counter: number;
  highestUpvote() {
    this.currentValue = 0
    this.newValue = 0

    for (this.counter = 0; this.counter < this.quotes.length; this.counter++) {
      this.newValue = this.quotes[this.counter].upVote;
      if (this.newValue > this.currentValue) { this.currentValue = this.newValue }
    }
    return this.currentValue
  }
  addedQuote(quote) {
    let arraysize = this.quotes.length;
    quote.id = arraysize + 1;
    quote.datePosted = new Date(quote.datePosted)
    this.quotes.push(quote)
  }
  quoteDelete(isRead, index) {
    if (isRead) {
      let toDelete = confirm(`Are you sure you want to delete this Quote?`)
      if (toDelete) {
        this.quotes.splice(index, 1);
      }

    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
