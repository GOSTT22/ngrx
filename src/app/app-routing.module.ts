import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', loadChildren: () => import('./houses/houses.module').then(m => m.HousesModule), pathMatch: 'full' },
  { path: 'house-detail/:id', loadChildren: () => import('./house-detail/house-detail.module').then(m => m.HouseDetailModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
