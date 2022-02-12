import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styles: [
  ]
})
export class PartnersComponent implements OnInit {
  isLoading: boolean = true;

  cardList = [
    { cardId: 1, title: 'All', value: 0, isActive: true, query: '' },
    { cardId: 3, title: 'Unverified', value: 0, isActive: false, query: 'status:New' },
    { cardId: 4, title: 'Active', value: 0, isActive: false, query: 'status:In progress' },
    { cardId: 5, title: 'Inactive', value: 0, isActive: false, query: 'status:Complete' },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
