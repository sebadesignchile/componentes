import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponentComponent } from './components/nav-component/nav-component.component';
import { MainComponent } from './components/main/main.component';
import { AsideComponentComponent } from './components/aside-component/aside-component.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponentComponent,
    MainComponent,
    AsideComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
