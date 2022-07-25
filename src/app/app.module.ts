import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SeleniumWebDriverComponent } from './selenium-web-driver/selenium-web-driver.component';
import { BasicJavaCodeComponent } from './basic-java-code/basic-java-code.component';
import { SpringbootServicesComponent } from './springboot-services/springboot-services.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { appRoutingModule } from './app-routing-module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SeleniumIntroductionComponent } from './components/selenium-introduction/selenium-introduction.component';
import { Chapter1Component } from './components/chapter1/chapter1.component';
import { Chapter2Component } from './components/chapter2/chapter2.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SeleniumWebDriverComponent,
    BasicJavaCodeComponent,
    SpringbootServicesComponent,
    NavbarComponent,
    SidebarComponent,
    SeleniumIntroductionComponent,
    Chapter1Component,
    Chapter2Component
  ],
  imports: [
    BrowserModule,
    RouterModule,
    ReactiveFormsModule,  
    appRoutingModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
