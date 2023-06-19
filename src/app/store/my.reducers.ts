import { Action, createReducer, on } from "@ngrx/store";
import { MyStateInterface } from "./myState.interface";
import { setValue, setValueFailure, setValueSuccess } from "./my.actions";

// const clients = [{
//     fio: 'Semen',
//     age: '18',
//     job: 'stident'
// }]

const initialState: MyStateInterface = {
    value: null,
    error: null
}

const myReducer = createReducer(
    initialState,
    // on(
    //     setAllClients,
    //     (state): MyStateInterface => (
    //         {...state, allClients: clients}
    //     )
    // ),
    on(
        setValue, 
        (state):MyStateInterface => (
            {...state}
        )
    ),
    on(
        setValueSuccess, 
        (state, action):MyStateInterface => {
            if (state.value && state.value === action.value){
                return{...state, error: 'There is the same value'}
            }
            return{...state, value: action.value}
        }
    ),
    on(
        setValueFailure, 
        (state):MyStateInterface => (
            {...state, error: 'Something went wrong'}
        )
    )
)

export function reducers(state: MyStateInterface, action: Action){
    return myReducer(state, action);
}