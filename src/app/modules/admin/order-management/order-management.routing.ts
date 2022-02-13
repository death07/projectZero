import { Route } from "@angular/router";
import { OrderDetailsComponent } from "./order/order-details/order-details.component";
import { OrderListComponent } from "./order/order-list/order-list.component";

export const orderRoute: Route[] = [

    {
        path: 'orders',
        component: OrderListComponent
    },
    {
        path: 'orders/:id',
        component: OrderDetailsComponent
    },
    {
        path: 'drafts',
        component: OrderListComponent
    },
    {
        path: 'templates',
        component: OrderListComponent
    },


]; 