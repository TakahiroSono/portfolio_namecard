import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CaptionComponent } from './caption/caption.component';
import { NavButtonComponent } from './caption/nav/nav-button/nav-button.component';
import { ProfileComponent } from './infomation/profile/profile.component';
import { LanguageComponent } from './infomation/language/language.component';
import { LinkComponent } from './infomation/link/link.component';

@NgModule({
  declarations: [
    AppComponent,
    CaptionComponent,
    NavButtonComponent,
    ProfileComponent,
    LanguageComponent,
    LinkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
