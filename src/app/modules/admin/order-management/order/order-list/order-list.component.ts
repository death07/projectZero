import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styles: [
    `.mat-form-field.mat-form-field-appearance-fill.fuse-mat-emphasized-affix .mat-form-field-wrapper .mat-form-field-flex .mat-form-field-suffix {
      background-color: #598C3F !important;
    }`
  ],
  encapsulation: ViewEncapsulation.None
})
export class OrderListComponent implements OnInit {
  isLoading: boolean = false;

  cardList = [
    { cardId: 1, title: 'All', value: 0, isActive: true, query: '' },
    { cardId: 2, title: 'Completed', value: 0, isActive: false, query: 'status:In progress' },
    { cardId: 3, title: 'Pending', value: 0, isActive: false, query: 'status:Complete' },
    { cardId: 3, title: 'Cancelled', value: 0, isActive: false, query: 'status:Complete' },
  ];

  dataSource = new MatTableDataSource<any>();

  displayedColumns = [
    "name",
    "orderNumber",
    "orderDate",
    "customer",
    "deliveryAddress",
    "partnerMerchant",
    "branch",
    "totalAmount",
    "status",
    "action"
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
