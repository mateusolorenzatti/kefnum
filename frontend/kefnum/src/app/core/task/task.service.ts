import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from 'src/app/core/infra/config.service';
import { Task } from './task';

@Injectable({ providedIn: 'root' })
export class TaskService {

    constructor(private http: HttpClient, private config: ConfigService) { }

    public refreshData(desk_id: number): Observable<Task[]> {
        return this.http
            .get<Task[]>(this.config.apiGetTasks() + desk_id);
    }

    public newTask(newTask: Task){
        return this.http.post<Task>(this.config.apiGetTasks(), newTask);
    }
    
    public deleteTask(taskId: number){
        return this.http.delete<any>(this.config.apiDeleteTask() + taskId);
    }

    public updateTask(taskId: number, updatedTask: Task){
        return this.http.patch<any>(this.config.apiUpdateTask() + taskId, updatedTask);
    }
}