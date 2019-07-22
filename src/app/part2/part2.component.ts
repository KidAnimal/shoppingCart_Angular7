import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-part2',
  templateUrl: './part2.component.html',
  styleUrls: ['./part2.component.css']
})
export class Part2Component implements OnInit {

  greeting: string;
  delimiter: string;

 constructor() {

    this.greeting = 'Hello World';
    this.delimiter = '#';

  }
 ngOnInit() {

 }
}
