import { Component, OnInit } from '@angular/core';
import * as employeesMethods from './products/state/products.reducer';
import * as employeesActions from './products/state/products.action';
import { Store, select } from '@ngrx/store';
import { Employee } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  title = 'Demonstration of application (with ngrx)';
  display: boolean= false;
  employees: Employee[] = [];
  constructor(private store: Store<employeesMethods.EmployeesState>) { }
  ngOnInit() {
   
    this.store.select("productsState").subscribe
      ((productsState: employeesMethods.EmployeesState) => {
        this.display = productsState.display;
      });
    this.store.select("productsState").subscribe
    ((productsState: employeesMethods.EmployeesState) => {
      this.employees = productsState.products;
    });  
    }
}
