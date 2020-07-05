import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: `./app.component.html`,
  styleUrls: [`app.component.css`]
})
export class AppComponent {
  // private http: HttpClient;
  // constructor(http: HttpClient) {
  //   this.http = http;
  // }

  users: any[];
  posts: any[];
  comments: any[];

  constructor(private httpClient: HttpClient) {
    this.httpClient
      .get<any[]>('http://jsonplaceholder.typicode.com/users')
      .subscribe(response => this.users = response);

    this.httpClient.get<any[]>('http://jsonplaceholder.typicode.com/posts')
      .subscribe(response => this.posts = response);

    this.httpClient
      .get<any[]>('http://jsonplaceholder.typicode.com/comments')
      .subscribe(response => this.comments = response);
  }


}
