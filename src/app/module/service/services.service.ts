import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http:HttpClient) { }
url='assets/data/data.json'
  getData(): Observable<any>{
    return this.http.get(this.url)
  }

  // addQuestion(formData: any): Observable<any> {
  //   return this.http.post(this.url, formData)
  // }
}
