import {Component, ViewEncapsulation, OnInit, } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PresentStory } from './reading.service';
import { Contact } from './read';

import {Observable} from 'rxjs/Rx';
import { Inject } from '@angular/core';
import { Story,User } from './read';

@Component({
  selector: 'app-reading',
  templateUrl: './reading.component.html',
  styleUrls: ['./reading.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ReadingComponent implements OnInit {
  private posts: Story[] = [];
  private userdetails: User[] = [];
  private errorMessage: any;

  constructor( private contactsService: PresentStory, private route: ActivatedRoute) { }

  ngOnInit() {
  this.story();
  this.user();
  }

  story() {
    console.log(this.route.snapshot.url[1].path);
    this.contactsService.getData(this.route.snapshot.url[1].path)
      .subscribe(
        posts => this.posts = posts,
        error => this.errorMessage = <any>error);
    console.log(this.posts);
  }
  user() {
    this.contactsService.getUser(this.route.snapshot.params.id)
      .subscribe(
        userdetails => this.userdetails = userdetails,
        error => this.errorMessage = <any>error);
    console.log(this.userdetails);
  }

}
