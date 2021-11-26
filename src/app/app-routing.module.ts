import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUSComponent } from './components/about-us/about-us.component';
import { AppPageComponent } from './components/app-page/app-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ScootersPageComponent } from './components/scooters-page/scooters-page.component';
import { StorePageComponent } from './components/store-page/store-page.component';

const routes: Routes = [
      { path: '', component: HomePageComponent},
      { path: 'app', component: AppPageComponent },
      { path: 'scooters', component: ScootersPageComponent },
      { path: 'store', component: StorePageComponent },
      { path: 'about', component: AboutUSComponent},
      { path: '404', component: NotFoundComponent},
      { path: '**', redirectTo: '404', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
