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

// import { Hero } from './reading.model';

export class PresentStory {
  contacts = [
    { name: 'Pascal Precht', id: 1 },
    { name: 'Christoph Burgdorf', id: 2 },
    { name: 'Thomas Burleson', id: 3 }
  ];
  public response: any[];


  constructor(@Inject(Http) private http: Http) {
  }
    getContact(): Promise<String[]> {
    console.log('ontrol is here');
      return this.http.get('http://127.0.0.1:3000/data1/')
        .toPromise()
        .then(response => <string[]> response.json()[1]);
    }
}
