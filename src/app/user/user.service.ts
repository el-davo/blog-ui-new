import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class UserService {

    constructor(private http: HttpClient) {
    }

    login({username, password}: { username: string, password: string }): Observable<any> {
        return this.http.post(`${environment.blogApi}/users/login`, {username, password});
    }

}
