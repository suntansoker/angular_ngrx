import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/product.model';
import { Store } from '@ngrx/store';
import * as employeesMethods from './state/products.reducer';
import * as employeesActions from './state/products.action';
import * as uuid from 'uuid';

@Component({
  selector: 'addemployee-form',
  templateUrl: './addproduct-form.component.html',
  styleUrls: ['./addproduct-form.component.css']
})
export class AddemployeeFormComponent implements OnInit {
  
  constructor(private store: Store<employeesMethods.EmployeesState>) { }

  ngOnInit() {
  }

  onSubmit(formValue: any){
    let newEmployee: Employee = {
      id: uuid.v4(),
      name: formValue.name,
      quantity: formValue.quantity,
    };
    console.log("onSubmit method of AddemployeeFormComponent");
    this.store.dispatch(new employeesActions.Add(newEmployee));
  }
}
