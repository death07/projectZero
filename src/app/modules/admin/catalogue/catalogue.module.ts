import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogueListComponent } from './catalogue-list/catalogue-list.component';
import { catalogueRoute } from './catalogue.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'app/shared/shared.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatRadioModule } from '@angular/material/radio';
import { CatalogueDetailsComponent } from './catalogue-details/catalogue-details.component';
import { CatalogueComponent } from './catalogue-details/catalogue/catalogue.component';
import { GalleryComponent } from './catalogue-details/gallery/gallery.component';
import { QrbarComponent } from './catalogue-details/qrbar/qrbar.component';



@NgModule({
  declarations: [
    CatalogueListComponent,
    CatalogueDetailsComponent,
    CatalogueComponent,
    GalleryComponent,
    QrbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(catalogueRoute),
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
    MatTableModule,
    MatPaginatorModule,
    MatTooltipModule,
    SharedModule,
    MatSidenavModule,
    MatRadioModule
  ]
})
export class CatalogueModule { }
