import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicComponent } from './basic/basic.component';
import { CompteComponent } from './compte/compte.component';
import { PreferenceComponent } from './preference/preference.component';

const routes: Routes = [
  { path: 'basic', component: BasicComponent },
  { path: '', redirectTo: '/basic', pathMatch: 'full' },
  { path: 'compte', component: CompteComponent },
  { path: 'preference', component: PreferenceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
