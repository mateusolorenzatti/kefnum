import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

const API_URL = environment.API_URL;
const api_routes = {
  login: API_URL + "/auth/token/login/",
  logout: API_URL + "/auth/token/logout/",
  userinfo: API_URL + "/staff/user/",
  newuser: API_URL + "/staff/newuser/",
  
  getDesks: API_URL + "/staff/desks/",
  getDeskInfo: API_URL + "/staff/deskinfo/",
  updateDesk: API_URL + "/staff/desks/modify/",
  deleteDesk: API_URL + "/staff/desks/modify/",

  getTasks: API_URL + "/staff/tasks/",
  deleteTask: API_URL + "/staff/tasks/modify/",
  updateTask: API_URL + "/staff/tasks/modify/"
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor() { }

  public getURL(){
      return API_URL;
  }

  public apiLogin(){
    return api_routes.login;
  }
  
  public apiLogout(){
    return api_routes.logout;
  }
  
  public apiUserInfo(){
    return api_routes.userinfo;
  }

  public apiNewUser(){
    return api_routes.newuser;
  }

  public apiGetDesks(){
    return api_routes.getDesks;
  }

  public apiGetDeskInfo(){
    return api_routes.getDeskInfo;
  }

  public apiGetTasks(){
    return api_routes.getTasks;
  }

  public apiDeleteTask(){
    return api_routes.deleteTask;
  }

  public apiUpdateTask(){
    return api_routes.updateTask;
  }

  public apiUpdateDesk(){
    return api_routes.updateDesk;
  }

  public apiDeleteDesk(){
    return api_routes.deleteDesk;
  }
}