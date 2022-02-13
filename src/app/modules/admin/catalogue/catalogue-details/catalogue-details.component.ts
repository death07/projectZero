import { ChangeDetectorRef, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { FuseMediaWatcherService } from '@fuse/services/media-watcher';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-catalogue-details',
  templateUrl: './catalogue-details.component.html',
  styles: [
  ],
  encapsulation: ViewEncapsulation.None
})
export class CatalogueDetailsComponent implements OnInit {
  @ViewChild('matDrawer', { static: true }) matDrawer: MatDrawer;
  private _unsubscribeAll: Subject<any> = new Subject<any>();
  isLoading: boolean = false;
  drawerMode: 'side' | 'over';
  sidebar = [
    {
      Title: 'Catalogue Details',
      description: 'Status : Active',
      isActive: true,
      condition: 'catalogue'
    },
    {
      Title: 'Gallery',
      description: 'Catalogue Photos',
      isActive: false,
      condition: 'gallery'
    },
    {
      Title: 'QR / Bar Code',
      description: 'QR Code and Bar Code',
      isActive: false,
      condition: 'qrcode'
    }
  ];

  conditionExpression: string = 'catalogue';

  constructor(
    private _changeDetectorRef: ChangeDetectorRef,
    private _router: Router,
    private _fuseMediaWatcherService: FuseMediaWatcherService
  ) { }

  ngOnInit(): void {

    // Subscribe to MatDrawer opened change

  }

  changePage(data, i) {
    console.warn(data)
    this.sidebar.forEach(element => {
      element.isActive = false;
    });
    this.sidebar[i].isActive = true
    this.conditionExpression = data.condition;
  }

}
