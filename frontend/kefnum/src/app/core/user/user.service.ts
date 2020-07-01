import { Injectable } from '@angular/core';
import { TokenService } from '../token/token.service';
import { BehaviorSubject } from 'rxjs';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from '../infra/config.service';
import { tap } from 'rxjs/operators';
import { stringify } from 'querystring';

const KEY = "user";

@Injectable({ providedIn: 'root'})
export class UserService { 

    private user: User;

    constructor(private http: HttpClient, private config: ConfigService, private token: TokenService) { }

    public refreshUserData(){
        return this.http
            .post(
                this.config.getURL() + '/user/', 
                {  }, 
                { observe: 'response'} 
        )
        .pipe(tap(res => {
            this.user = res.body as User;  
            this.setUserLocal();                
        }));
    }

    public setToken(authToken: string){
        this.token.setToken(authToken);
    }

    public setUserLocal() {
        window.localStorage.setItem(KEY, (this.user as unknown) as string);
    }

    public getUser(): User {
        return (window.localStorage.getItem(KEY)) as unknown as User;
    }

    public removeUser() {
        window.localStorage.removeItem(KEY);
    }
}