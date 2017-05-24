import {Component, ViewEncapsulation, OnInit, } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PresentStory } from './reading.service';
import { Contact } from './reading.model';

import {Observable} from 'rxjs/Rx';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-reading',
  templateUrl: './reading.component.html',
  styleUrls: ['./reading.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ReadingComponent implements OnInit {
  public contact: Observable<string[]>;

  constructor(@Inject(PresentStory) private contactsService: PresentStory, private route: ActivatedRoute) { }

  ngOnInit() {
    this.contactsService.getContact();
  }

}
