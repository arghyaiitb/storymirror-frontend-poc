/**
 * Created by argo on 23/05/17.
 */
import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';




 import { Story, User } from './read';

@Injectable()
export class PresentStory {
  constructor(private http: Http) {
  }

  getData(id): Observable<Story[]> {
    const api_point = 'http://127.0.0.1:3000/data/' + id;
    return this.http.get(api_point)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getUser(id): Observable<User[]> {
    const api_point = 'http://127.0.0.1:3000/user/' + id;
    return this.http.get(api_point)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    console.log(body);
    return body || ['a'];
  }

  private handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
