import { Component } from '@angular/core';
import { Employee } from './models/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-simple-crud';


//Array for test
  employeeArray: Employee[] = [
    { id: 1, name: 'Ryan', country: 'USA' },
    { id: 2, name: 'Alex', country: 'UK' },
  ];

  selectedEmployee: Employee = new Employee();

  openEdit(employee: Employee) {
    this.selectedEmployee = employee;
  }

  //Function for add or edit
  addOrEdit() {
    if (this.selectedEmployee.id === 0) {
      this.selectedEmployee.id = this.employeeArray.length + 1;
      this.employeeArray.push(this.selectedEmployee);
    }

    this.selectedEmployee = new Employee();
  }


  //function for delete
  delete() {
    if (confirm('Are you sure of this action?')) {
      this.employeeArray = this.employeeArray.filter(
        (x) => x != this.selectedEmployee
      );
      this.selectedEmployee = new Employee();
    }
  }
}
