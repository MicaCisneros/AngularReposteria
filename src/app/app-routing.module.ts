import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PasteleriaAboutComponent } from './pasteleria-about/pasteleria-about.component';
import { PasteleriaComponent } from './pasteleria/pasteleria.component';

const routes: Routes = [
  {
    path: '',
    redirectTo:'pasteleria',
    pathMatch: 'full'
  },
  {
    path: 'pasteleria',
    component: PasteleriaComponent
  },
  {
    path: 'about',
    component: PasteleriaAboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
