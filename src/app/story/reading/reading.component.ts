import {Component, ViewEncapsulation, OnInit, } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PresentStory } from './reading.service';
import { Contact } from './read';

import {Observable} from 'rxjs/Rx';
import { Inject } from '@angular/core';
import { Post } from './read';

@Component({
  selector: 'app-reading',
  templateUrl: './reading.component.html',
  styleUrls: ['./reading.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ReadingComponent implements OnInit {
  private posts: Post[] = [];
  private errorMessage: any;

  constructor( private contactsService: PresentStory, private route: ActivatedRoute) { }

  ngOnInit() {
    this.contactsService.getData(this.route.snapshot.params.id)
      .subscribe(
        posts => this.posts = posts,
        error => this.errorMessage = <any>error);
    console.log(this.posts);
  }

}
