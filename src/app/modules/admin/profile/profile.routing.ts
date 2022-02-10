import { Route } from "@angular/router";
import { MyProfileComponent } from "./my-profile/my-profile.component";

export const profileRoute: Route[] = [
    {
        path: '',
        redirectTo: 'my-profile'

    },
    {
        path: "my-profile",
        component: MyProfileComponent
    }
];