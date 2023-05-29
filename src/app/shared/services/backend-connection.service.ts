import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class BackendConnectionService {
  apiUrl = 'https://back.rail-travel-project.com/'; //https://34.147.140.133/
  constructor(private http: HttpClient) { }
  login(data: any): Observable<any> {
    return this.http.post( this.apiUrl + 'User/login', data).pipe(catchError(this.handleError));
  } 
  register(data: any): Observable<any> {
    return this.http.post( this.apiUrl + 'User/signUp', data).pipe(catchError(this.handleError));
  } 
  setTravelMode(data: any): Observable<any> {
    return this.http.put( this.apiUrl + 'User/set/travelMode', data).pipe(catchError(this.handleError));
  } 
  getLeaderboard(): Observable<any> {
    return this.http.get( this.apiUrl + 'User/universityLeaderboard').pipe(catchError(this.handleError));  
  }
/*   getUser() {
    return this.http.get( this.apiUrl + 'User/get/user').pipe(catchError(this.handleError));  
  } */
  getCollegeLeaderboard(idUniversity : number) : Observable<any> {
    return this.http.get( this.apiUrl + 'User/yourUniversityLeaderboard?id=' + idUniversity).pipe(catchError(this.handleError));  
  }
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
