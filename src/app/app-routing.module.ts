import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicComponent } from './basic/basic.component';
import { CompteComponent } from './compte/compte.component';

const routes: Routes = [
  { path: 'basic', component: BasicComponent },
  { path: '', redirectTo: '/basic', pathMatch: 'full' },
  { path: 'compte', component: CompteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
