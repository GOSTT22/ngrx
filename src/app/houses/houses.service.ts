import { Injectable } from '@angular/core';
import { HouseInterface } from '../house-detail/house';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { delay, tap, catchError, map, take } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HousesService {
  deleteHouse(id: number) {
    throw new Error('Method not implemented.');
  }
  
  private url = '/api/houses';
    wasUpdated$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  housesService: any;
    
  constructor(public http: HttpClient, 
  ) { }

  getWasUpdate(): BehaviorSubject<boolean>{
    return this.wasUpdated$
  }

  setWasUpdate(value: boolean): void{
    this.wasUpdated$.next(value);
  }
  
 
  

  getHouses(): Observable<HouseInterface[]> {
    return this.http.get<HouseInterface[]>(this.url).pipe(
        tap(_ => console.log('fetched heros')),
        catchError((error) => throwError(`Server do not response. Error : ${error.toString()}`))
      );
  }

  updateHouse(HouseForUpdating: HouseInterface): Observable<any>{
    return this.http.put(this.url + '/' + HouseForUpdating.id, HouseForUpdating).pipe(
        tap(_ => console.log(`updated house with id-${HouseForUpdating.id}`)),
        catchError((error) => throwError(`Server do not response. Error : ${error.toString()}`))
    )
  }

  addHouse(newHouse: HouseInterface): Observable<any> {
    return this.http.post<HouseInterface>(this.url, newHouse).pipe(
        tap(_ => console.log('added new House')),
        catchError((error) => throwError(`Server do not response. Error : ${error.toString()}`))
      );
  }


}
