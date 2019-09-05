import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataShowComponent } from './components/data-show/data-show.component';

const routes: Routes = [
  { path: 'user/:user', component: DataShowComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
