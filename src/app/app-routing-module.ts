import { NotFoundComponent } from './not-found/not-found.component';
import { Routes, RouterModule, } from '@angular/router';
import { NgModule } from '@angular/core';

import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { ServersComponent } from './servers/servers.component';




const routeNav : Routes = [
    {path:'', component: HomeComponent},
    {path:'users', component: UsersComponent},
    {path:'users/:id/:name', component: UserComponent},
    {path:'servers', component: ServersComponent, children: [
        {path:':id', component: ServerComponent},
        {path:':id/edit', component: EditServerComponent},
    ]},
    {path:'not-found', component: NotFoundComponent},
    {path:'**', redirectTo:'not-found'}
    
    ]

@NgModule({
    imports: [RouterModule.forRoot(routeNav)],
    exports: [RouterModule]
    
})

export class RoutingModule{}