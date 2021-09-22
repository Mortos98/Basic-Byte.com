import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadderComponent } from './headder/headder.component';
import { DarkToggleComponent } from './dark-toggle/dark-toggle.component';
import { MenuNavigationComponent } from './menu-navigation/menu-navigation.component';
import { LogoComponent } from './logo/logo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadderComponent,
    DarkToggleComponent,
    MenuNavigationComponent,
    LogoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
