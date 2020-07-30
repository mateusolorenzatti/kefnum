import { Component, OnInit } from '@angular/core';
import { DeskService } from '../desk/desk.service';
import { Desk } from '../desk/desk';

@Component({
  selector: 'kef-desk-list',
  templateUrl: './desk-list.component.html'
})
export class DeskListComponent implements OnInit {

  desks: Desk[] = [];

  constructor(public deskService: DeskService) { }

  ngOnInit(): void {
    this.deskService.refreshData()
      .subscribe(
        desks => {
          this.desks = desks;
          console.log(desks);
        },
        err => {
          console.log(err);
        });
  }

}
