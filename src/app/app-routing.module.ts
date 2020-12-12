// ng-router snippet para modulos hijos
// ng-router-appmodule para la raiz de la aplicación 
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';
import { HomeComponent } from './components/home/home.component';
import { PricesComponent } from './components/prices/prices.component';
import { ProtectedComponent } from './components/protected/protected.component';


const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'prices', component: PricesComponent },
    { path: 'protected', component: ProtectedComponent, canActivate: [AuthGuard ] },
    { path: '**', pathMatch: 'full',  redirectTo: 'home' },

    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}







