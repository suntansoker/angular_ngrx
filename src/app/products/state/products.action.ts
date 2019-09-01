import { Action } from '@ngrx/store';
import { Employee } from '../../models/product.model';

export enum EmployeesActionTypes {
    //DISPLAY = 'DISPLAY',
    ADD = 'ADD'
    //DELETE = 'DELETE'
}

// export class Display implements Action {
//     readonly type = EmployeesActionTypes.DISPLAY;
//     constructor(public payload: boolean) { 
//         console.log("ACTION => Display");
//     }
// }

export class Add implements Action {
    readonly type = EmployeesActionTypes.ADD;
    constructor(public payload: Employee) { 
        console.log("ACTION => Add");
    }
}

// export class Delete implements Action {
//     readonly type = EmployeesActionTypes.DELETE;
//     constructor(public payload: string) { 
//         console.log("ACTION => Delete");
//     }
// }

export type EmployeesActions = Add; 
    // Display |
    // Add | 
    // Delete;
