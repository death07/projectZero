import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartnersComponent } from './partners/partners.component';
import { UsersComponent } from './users/users.component';
import { accountsRoute } from './accounts.routing';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';



@NgModule({
  declarations: [
    PartnersComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(accountsRoute),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatRippleModule,
    MatProgressBarModule,
  ]
})
export class AccountsModule { }
