import { Injectable } from '@angular/core';
import * as $ from 'jquery';

const KEY = 'selectedTheme';

@Injectable({ providedIn: 'root'})
export class ThemeManagerService {

  theme: number;

  themesHeader = ['body', 'p', 'input'];
  themesConfig =  [
    {
      'name': 'dark',
      'body': 'bg-dark text-white',
      'p': 'text-white',
      'input': 'bg-dark border-kefnum text-light'
    },
    {
      'name': 'light',
      'body': 'bg-light',
      'p': 'text-dark',
      'input': 'bg-light border-kefnum text-dark',
    }
  ];

  constructor() { 
    this.retrieveTheme();
    this.applyTheme();
  }

  private registerTheme(){
    window.localStorage.setItem(KEY, String(this.theme));
  }

  private retrieveTheme(){
    this.theme = <number> <unknown>window.localStorage.getItem(KEY);
  
    if(!this.theme){
      this.theme = 0;
    }
  }

  public setTheme(newTheme: number){
    this.theme = newTheme;
    this.registerTheme();

    this.applyTheme();
  }

  public getTheme(){
    return this.theme;
  }

  public applyTheme(){
    let temaOposto = (this.theme == 0) ? 1 : 0;

    this.themesHeader.forEach(element => {
      let dom = $(element);
      // Remover as classes do antigo tema
      dom.removeClass(this.themesConfig[temaOposto][element]);

      // Adicionar as classes do tema atual
      dom.addClass(this.themesConfig[this.theme][element]);
    });
  }

  public isDarkMode(){
      return this.theme == 0;
  }

  public toggleTheme(){
    this.theme = ((this.theme) == 0) ? 1 : 0;
    this.registerTheme();

    this.applyTheme();
  }
}
