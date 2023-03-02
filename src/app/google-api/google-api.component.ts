import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable, map, catchError, of } from 'rxjs';

@Component({
  selector: 'app-google-api',
  templateUrl: './google-api.component.html',
  styleUrls: ['./google-api.component.scss'],
})
export class GoogleApiComponent {
  apiLoaded: Observable<boolean>;

  constructor(httpClient: HttpClient) {
    this.apiLoaded = httpClient
      .jsonp(
        'https://maps.googleapis.com/maps/api/js?key=AIzaSyCsq54nA1YkGvh--X8YwZO-MMOu2IkpAJg&libraries=places',
        'callback'
      )
      .pipe(
        map(() => true),
        catchError(() => of(false))
      );
  }
}
