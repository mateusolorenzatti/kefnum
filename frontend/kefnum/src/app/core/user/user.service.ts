import { Injectable } from '@angular/core';
import { TokenService } from '../token/token.service';
import { Observable } from 'rxjs';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../infra/config.service';

const KEY = "user";

@Injectable({ providedIn: 'root' })
export class UserService {

    constructor(private http: HttpClient, private config: ConfigService, private token: TokenService) { }

    public refreshUserData(): Observable<User[]> {
        return this.http
            .get<User[]>(this.config.apiUserInfo());
    }

    public setToken(authToken: string) {
        this.token.setToken(authToken);
    }

    public setUserLocal(user: User) {
        window.localStorage.setItem('id', (user.id as unknown) as string);
        window.localStorage.setItem('username', user.username);
        window.localStorage.setItem('first_name', user.first_name);
        window.localStorage.setItem('last_name', user.last_name);
        window.localStorage.setItem('email', user.email);
    }

    public getUser(): User {
        const user = {
            'id': (window.localStorage.getItem('id') as string) as unknown as number,
            'username': window.localStorage.getItem('username'),
            'first_name': window.localStorage.getItem('first_name'),
            'last_name': window.localStorage.getItem('last_name'),
            'email': window.localStorage.getItem('email')
        }

        return user as User;
    }

    public removeUser() {
        window.localStorage.removeItem(KEY);
    }

    public isLogged() {
        return this.token.hasToken();
    }

    public logout() {
        return this.http.post<any>(this.config.apiLogout(), {})
            .subscribe(() => {
                this.token.removeToken();

                window.localStorage.removeItem('id');
                window.localStorage.removeItem('username');
                window.localStorage.removeItem('first_name');
                window.localStorage.removeItem('last_name');
                window.localStorage.removeItem('email');
            });
    }

    public newUser(newUser: User){
        return this.http.post<User>(this.config.apiNewUser(), newUser);
    }
}