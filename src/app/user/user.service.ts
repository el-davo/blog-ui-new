import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {SignupForm} from './user.state';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {
  }

  signup({username, password, email}: SignupForm) {
    return this.http.post(`${environment.blogApi}/users`, {username, password, email});
  }

}
