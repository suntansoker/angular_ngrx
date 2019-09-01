import { Employee } from '../../models/product.model';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EmployeesActions, EmployeesActionTypes } from './products.action';
import * as uuid from 'uuid';

export interface EmployeesState {
  display: boolean;
  products: Employee[];
}

const initialState: EmployeesState = {
  display: false,
  products: [
    {
      id: uuid.v4(),
      name: "Moto G5",
      quantity: 2
    },
    {
      id: uuid.v4(),
      name: "Racold Geyser",
      quantity: 3
    }
  ]
};

const getEmployeesFeatureState = createFeatureSelector<EmployeesState>('employeesState');

export const display = createSelector(
  getEmployeesFeatureState,
  state => state.display
);

export const getEmployees = createSelector(
  getEmployeesFeatureState,
  state => state.products
);

export const employeesReducer = (state=initialState, action: EmployeesActions): EmployeesState => {
  switch (action.type) {
    case EmployeesActionTypes.ADD:
      console.log("employeesReducer ==> ADD");
      console.log(`state=${JSON.stringify(state)}, action=${JSON.stringify(action)}`);
      return {
        ...state,
        display: true,
        products: [
          ...state.products,
          action.payload,
        ]
      };

    default:
      return state;
  }
}
