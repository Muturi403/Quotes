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
    new Quote('Everyone thinks of changing the world, but no one thinks of changing himself.', 'Faith Muturi', 'Leo Tolstoy', new Date(2021, 6, 16), 0, 0),
    new Quote('Grief does not change you, Hazel. It reveals you.', 'Faith Muturi', 'John Green', new Date(2021, 6, 16), 0, 0),
    new Quote('It is only after you’ve stepped outside your comfort zone that you begin to change, grow, and transform.', 'Faith Muturi', 'Roy T. Bennett', new Date(2021, 6, 16), 0, 0),
    new Quote('Yesterday I was clever, so I wanted to change the world. Today I am wise, so I am changing myself.', 'Faith Muturi', 'Rumi', new Date(2021, 6, 16), 0, 0),
    new Quote('You can not stop the future You can not rewind the past.The only way to learn the secret is to press play.', 'Faith Muturi', 'Jay Asher', new Date(2021, 6, 16), 0, 0)
  ] 
  constructor() { }

  ngOnInit(): void {
  }

}
