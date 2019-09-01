import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EmployeesModule } from './products/products.module';

// ngrx
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import * as employeesMethods from './products/state/products.reducer';
import * as employeesActions from './products/state/products.action';
import { PageNotFoundComponent } from './page-not-found.component';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    EmployeesModule,
    StoreModule.forRoot({}), // ngrx
    StoreDevtoolsModule.instrument({
      name: 'Employees App Devtools',
      maxAge: 20
    }), StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })	
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
