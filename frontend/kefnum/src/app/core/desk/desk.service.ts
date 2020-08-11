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
    
    public getDeskInfo(id: number): Observable<Desk> {
        return this.http
            .get<Desk>(this.config.apiGetDeskInfo() + id);
    }

    public newDesk(newDesk: Desk){
        return this.http.post<Desk>(this.config.apiGetDesks(), newDesk);
    }

    public updateDask(deskId: number, updatedDesk: Desk){
        return this.http.patch<any>(this.config.apiUpdateDesk() + deskId, updatedDesk);
    }

    public deleteDesk(deskId: number){
        return this.http.delete<any>(this.config.apiDeleteDesk() + deskId);
    }
}