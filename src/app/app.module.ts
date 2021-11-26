import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ScootersPageComponent } from './components/scooters-page/scooters-page.component';
import { AppPageComponent } from './components/app-page/app-page.component';
import { StorePageComponent } from './components/store-page/store-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutUSComponent } from './components/about-us/about-us.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    HomePageComponent,
    ScootersPageComponent,
    AppPageComponent,
    StorePageComponent,
    FooterComponent,
    AboutUSComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
