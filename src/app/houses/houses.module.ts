import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { HousesComponent } from './houses.component';
import { HousesService } from './houses.service';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../store/my.reducers';

const routes: Routes = [
  {
    path: '',
    component: HousesComponent,
  },
];

@NgModule({
  declarations: [HousesComponent],
  imports: [
    StoreModule.forFeature('storedValue', reducers),
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    HousesComponent,
    HttpClientModule,
  ],
  providers: [HousesService]
})
export class HousesModule { }