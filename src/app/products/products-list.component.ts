import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as employeesMethods from './state/products.reducer';
import * as employeesActions from './state/products.action';

import { Employee } from '../models/product.model';

@Component({
  selector: 'employees-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class EmployeesListComponent implements OnInit {
  display: boolean;
  employees: Employee[] = [];

  constructor(private store: Store<employeesMethods.EmployeesState>) { }

  ngOnInit() {
   
    this.store.select("productsState").subscribe
    ((productsState: employeesMethods.EmployeesState) => {
      this.employees = productsState.products;
    });
  
    }

}
