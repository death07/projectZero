import { Route } from "@angular/router";
import { CatalogueListComponent } from "./catalogue-list/catalogue-list.component";

export const catalogueRoute: Route[] = [
    {
        path: '',
        component: CatalogueListComponent
    },

]; 