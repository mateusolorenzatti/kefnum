import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { UserService } from '../user/user.service';
import { ConfigService } from '../infra/config.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private config: ConfigService,
    private userService: UserService) { }

  authenticate(username: string, password: string) {
    return this.http.post<any>(
        this.config.apiLogin(), 
        { username, password }, 
        { observe: 'response'} 
      )
      .pipe(tap(res => {
        const authToken = res.body['auth_token'];
        this.userService.setToken(authToken);

        // console.log(`User ${username} authenticated with token ${authToken}`);
      }));
  }
}