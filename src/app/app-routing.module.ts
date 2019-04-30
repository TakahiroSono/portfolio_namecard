import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './information/profile/profile.component';
import { LanguageComponent } from './information/language/language.component';
import { LinkComponent } from './information/link/link.component';

const routes: Routes = [
  {path: '', component:ProfileComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'language', component: LanguageComponent},
  {path: 'link', component: LinkComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
