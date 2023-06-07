import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppStateInterface } from "./appState.interface";
import { MyStateInterface } from "./myState.interface";

export const MyFeatureSelector = createFeatureSelector<
    AppStateInterface, MyStateInterface
>('storedValue')

export const GetValueSelector = createSelector(
    MyFeatureSelector, 
    (myState: MyStateInterface) => myState.value
)

export const GetErrorSelector = createSelector(
    MyFeatureSelector,
    (myState: MyStateInterface) =>myState.error
)