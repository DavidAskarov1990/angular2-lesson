/**
 * Created by david on 18.06.17.
 */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminHomeComponent, ManageUsersComponent, ManagePhraseComponent, LoginCompoent } from '../../components/component.index';

import { AuthGuard } from '../../services/service.index';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: "admin",
                component: AdminHomeComponent,
                canActivate: [AuthGuard],
                children: [
                    {
                        path: "",
                        children: [
                            { path: "phrases5", component: ManagePhraseComponent },
                            { path: "users", component: ManageUsersComponent },
                            { path: "", redirectTo: "phrases5", pathMatch: "full" }
                        ]
                    }
                ]
            },
            {
                path: "login",
                component: LoginCompoent
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class Lesson5_4_RoutingModule {}