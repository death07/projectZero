import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styles: [
    `.mat-form-field.mat-form-field-appearance-fill.fuse-mat-emphasized-affix .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-suffix {
      background-color: #598C3F !important;
    }`
  ],
  encapsulation: ViewEncapsulation.None
})
export class PartnersComponent implements OnInit {
  isLoading: boolean = false;

  cardList = [
    { cardId: 1, title: 'All', value: 0, isActive: true, query: '' },
    { cardId: 3, title: 'Unverified', value: 0, isActive: false, query: 'status:New' },
    { cardId: 4, title: 'Active', value: 0, isActive: false, query: 'status:In progress' },
    { cardId: 5, title: 'Inactive', value: 0, isActive: false, query: 'status:Complete' },
  ];

  dataSource = new MatTableDataSource<any>();

  displayedColumns = [
    "company",
    "serviceType",
    "country",
    "stateCity",
    "status",
    "action"
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
