import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { NavbarDirective } from './directives/navbar.directive';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { ButtonModule } from './button-module/button.module';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    NavbarDirective,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
