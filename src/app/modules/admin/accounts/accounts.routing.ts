import { Route } from "@angular/router";
import { UserComponent } from "app/layout/common/user/user.component";
import { PartnersComponent } from "./partners/partners.component";

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
        component: UserComponent
    }
]; 