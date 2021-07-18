import { Component, OnInit, Input,EventEmitter, Output } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class quoteDetailsComponent implements OnInit {
  @Input() quote: Quote;
  @Output() isRead=new EventEmitter<boolean>();

  deleteQuote(read: boolean) {
    this.isRead.emit(read);
  }
  upvote() {
    this.quote.upVote += 1;
  }
  downvote() {
    this.quote.downVote += 1;
  }


  constructor() { }

  ngOnInit(): void {
  }

}
