import { Route } from "@angular/router";
import { PartnersComponent } from "./partners/partners.component";
import { UsersComponent } from "./users/users.component";

export const accountsRoute: Route[] = [
    {
        path: '',
        redirectTo: 'partners'
    },
    {
        path: 'partners',
        component: PartnersComponent
    },
    {
        path: 'users',
        component: UsersComponent
    }
]; 