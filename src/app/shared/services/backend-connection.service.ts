import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class BackendConnectionService {
  apiUrl = environment.webapiurl;
  constructor(private http: HttpClient) { }
  getData(data: any): Observable<any> {
    return this.http.post( this.apiUrl + 'User/login', data).pipe(catchError(this.handleError));
  } 
  /* getData(data:any) {
    return fetch(this.apiUrl, {
    method: 'POST',
    body: JSON.stringify(data)
  });
  } */
  public handleError(err: HttpErrorResponse) {
    let errMsg:string='';
    if (err.error instanceof Error) {
      console.log('An error occurred:', err.error.message);
      errMsg = err.error.message;
      console.log(errMsg)
    } else {
      console.log(`Backend returned code ${err.status}`);
      console.log(err.error.message)
    }
    return throwError(() => errMsg); 
  }
}
