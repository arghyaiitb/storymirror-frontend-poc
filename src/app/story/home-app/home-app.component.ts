import { Component, OnInit } from '@angular/core';
import { StoriesExample, example } from './home-app-template';

@Component({
  selector: 'app-home-app',
  templateUrl: './home-app.component.html',
  styleUrls: ['./home-app.component.css']
})
export class HomeAppComponent implements OnInit {
  public example = example;
  constructor() { }

  ngOnInit() {
  }

}
