import { Injectable } from '@angular/core';

const API_URL = 'http://localhost:8003';
const api_routes = {
  login: API_URL + "/auth/token/login/",
  logout: API_URL + "/auth/token/logout/",
  userinfo: API_URL + "/user/",
  newuser: API_URL + "/newuser/",
  getDesks: API_URL + "/desks/",
  getTasks: API_URL + "/tasks/"
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

  public apiGetTasks(){
    return api_routes.getTasks;
  }
}