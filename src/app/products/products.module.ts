import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { EmployeesComponent } from './products.component';
import { AddemployeeFormComponent } from './addproduct-form.component';
import { EmployeesListComponent } from './products-list.component';
import { StoreModule } from '@ngrx/store';
import { employeesReducer } from './state/products.reducer';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    StoreModule.forFeature('productsState', employeesReducer) // ngrx
  ],
  declarations: [
    EmployeesComponent,
    AddemployeeFormComponent,
    EmployeesListComponent,
  ],
  exports:[
    EmployeesComponent,
  ]
})
export class EmployeesModule { }
