import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  getData(url:string):Observable<Promise<any>>
  {
    return from(
      fetch(url, {
        method: 'GET',
      })
    ).pipe(map((response) => response.json()));
  }

  postData(url:string, data:any): Observable<Promise<any>>
  {
    return from(
      fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
      })
    ).pipe(map((response) => response.json()));
  }
  
}
