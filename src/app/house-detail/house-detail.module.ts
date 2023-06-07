import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HouseDetailComponent } from './house-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HousesService } from '../houses/houses.service';


const routes: Routes = [
  {
    path: '',
    component: HouseDetailComponent,
  },
];

@NgModule({
  declarations: [HouseDetailComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    HouseDetailComponent,
    HttpClientModule,
  ],
  providers: [HousesService]
})
export class HouseDetailModule { }