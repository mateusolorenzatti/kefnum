import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from 'src/app/core/infra/config.service';
import { Desk } from './desk';

@Injectable({ providedIn: 'root' })
export class DeskService {

    constructor(private http: HttpClient, private config: ConfigService) { }

    public refreshData(): Observable<Desk[]> {
        return this.http
            .get<Desk[]>(this.config.apiGetDesks());
    }

    public newDesk(newDesk: Desk){
        return this.http.post<Desk>(this.config.apiGetDesks(), newDesk);
    }
}