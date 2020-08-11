import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'kef-title',
  templateUrl: './title.component.html'
})
export class TitleComponent implements OnInit {

  @Input() title: string

  @Input() sizing: string = 'col';

  constructor() { }

  ngOnInit(): void {
  }
}
