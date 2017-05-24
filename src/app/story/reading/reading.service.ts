/**
 * Created by argo on 23/05/17.
 */
import {Injectable} from '@angular/core';
import {Http, Jsonp} from '@angular/http';
import {Router} from '@angular/router';

import {Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Inject } from '@angular/core';


export class PresentStory {
  contacts = [
    { name: 'Pascal Precht', id: 1 },
    { name: 'Christoph Burgdorf', id: 2 },
    { name: 'Thomas Burleson', id: 3 }
  ];
  public response: any[];


  constructor(@Inject(Jsonp) public jsonp: Jsonp) {
  }
    getContact() {
      return this.jsonp
        .get('http://localhost:3000/data/')
        .map(response => <string[]> response.json()[1]);
    }
}
