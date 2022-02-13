import { Route } from "@angular/router";
import { CatalogueDetailsComponent } from "./catalogue-details/catalogue-details.component";
import { CatalogueListComponent } from "./catalogue-list/catalogue-list.component";

export const catalogueRoute: Route[] = [
    {
        path: '',
        component: CatalogueListComponent
    },
    {
        path: 'details',
        component: CatalogueDetailsComponent
    },
]; 