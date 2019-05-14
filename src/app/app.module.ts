import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CaptionComponent } from './caption/caption.component';
import { ProfileComponent } from './information/profile/profile.component';
import { LanguageComponent } from './information/language/language.component';
import { LinkComponent } from './information/link/link.component';
import { InformationComponent } from './information/information.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    CaptionComponent,
    ProfileComponent,
    LanguageComponent,
    LinkComponent,
    InformationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
