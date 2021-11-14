import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UnitComponent } from './unit/unit.component';
import { UnitsComponent } from './units/units.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'home' }
  },
  {
    path: 'unit',
    component: UnitComponent,
    data: { title: 'unit' }
  },
  {
    path: 'units',
    component: UnitsComponent,
    data: { title: 'unit' }
  },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
