import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CaptionComponent } from './caption/caption.component';
import { NavButtonComponent } from './caption/nav/nav-button/nav-button.component';

@NgModule({
  declarations: [
    AppComponent,
    CaptionComponent,
    NavButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
