import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'kef-dropdown-item',
  templateUrl: './dropdown-item.component.html',
})
export class DropdownItemComponent implements OnInit {

  @Input('nomeItem') nomeItem: string;
  @Input('icon') icon: string;

  @Output() onClick = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onClickButton() {
    this.onClick.emit();
  }
}
