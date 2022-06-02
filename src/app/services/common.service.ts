import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  public apiURL: string;
  constructor(private http: HttpClient ) {
    this.apiURL = "http://localhost:3000/"
  }

  public saveUser(reqBody: any) {
    return this.http.post(`${this.apiURL}user-details`, reqBody);
  }
}
