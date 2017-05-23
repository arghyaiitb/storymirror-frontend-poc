import {Component, ViewEncapsulation, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PresentStory } from './reading.service';
import { Contact } from './reading.model';

@Component({
  selector: 'app-reading',
  templateUrl: './reading.component.html',
  styleUrls: ['./reading.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ReadingComponent implements OnInit {
  public contact: Contact;

  constructor(private contactsService: PresentStory, private route: ActivatedRoute) { }

  ngOnInit() {
    this.contact = this.contactsService.getContact(this.route.snapshot.params.id);
  }

}
