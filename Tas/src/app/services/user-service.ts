import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable()
export class UserService {

  headers: Headers = new Headers({
    "Content-Type": 'application/json'
  });
  private apiUrl = 'http://159.89.12.132:8080/api/';

  constructor(private http: HttpClient) {

  }

  registerUser(userData): any {
    this.http.post(this.apiUrl + "user", userData, this.headers)
      .subscribe((res) => {
        console.log(res);
      }, (err) => {
        console.log(err, 'register')
      });
  }
}
