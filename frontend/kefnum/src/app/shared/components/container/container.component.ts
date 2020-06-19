import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'kef-container',
  templateUrl: './container.component.html',
})
export class ContainerComponent implements OnInit {

  @Input('centralizado') 
  public centralizado: boolean;

  public classe: string;

  constructor() { }

  ngOnInit(): void {
    this.classe = (this.centralizado !== undefined) ? "text-center" : "";
  }

}
