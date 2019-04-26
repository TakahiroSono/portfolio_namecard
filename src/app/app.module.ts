import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CaptionComponent } from './caption/caption.component';
import { ProfileComponent } from './information/profile/profile.component';
import { LanguageComponent } from './information/language/language.component';
import { LinkComponent } from './information/link/link.component';
import { InfomationComponent } from './information/infomation.component';

@NgModule({
  declarations: [
    AppComponent,
    CaptionComponent,
    ProfileComponent,
    LanguageComponent,
    LinkComponent,
    InfomationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
