import { createAction, props } from "@ngrx/store";
import { ActionTypes } from "./actiontypes";


export const setValue = createAction(
    ActionTypes.SET_VALUE,
    props<{value: string}>()
)

export const setValueSuccess = createAction(
    ActionTypes.SET_VALUE_SUCCESS,
    props<{value: string}>()
)

export const setValueFailure = createAction(
    ActionTypes.SET_VALUE_FAILURE,
    props<{error: string}>()
)