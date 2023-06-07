import { Component, OnDestroy, OnInit } from '@angular/core';
import {  Observable, Subscription } from 'rxjs';
import { HousesService } from './houses.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { setValueSuccess } from '../store/my.actions';
import { GetErrorSelector, GetValueSelector } from '../store/my.selectors';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.scss']
})
export class HousesComponent implements OnInit, OnDestroy {

  houses$ = this.housesService.getHouses();
  updateSubscription: Subscription;
  valueInState$: Observable<string>;
  error$: Observable<string> = this.store.select(GetErrorSelector);

  constructor(public housesService: HousesService, public router: Router, private store: Store) { }

  createNewHouse(): void{
    this.router.navigate(['/house-detail', 0]);
  }

  setValue(settedValue: string): void {
    this.store.dispatch(setValueSuccess({
      value: settedValue
    }))
  }

  getValue(): void {
    this.valueInState$ = this.store.select(GetValueSelector)
  }


  ngOnInit(): void {
    this.updateSubscription = this.housesService.getWasUpdate().subscribe(value =>{
      if (value) {
        this.houses$ = this.housesService.getHouses();
        this.housesService.setWasUpdate(false);
      }
    })
  }


  ngOnDestroy(): void {
    if (this.updateSubscription){
      this.updateSubscription.unsubscribe();
    }
  }

  

}
