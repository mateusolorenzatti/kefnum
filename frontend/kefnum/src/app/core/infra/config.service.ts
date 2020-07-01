import { Injectable } from '@angular/core';

const API_URL = 'http://localhost:8003';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor() { }

  public getURL(){
      return API_URL;
  }
}