import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 2 CRUD Operation with an Array';
  employees = [
    {name: 'kiran', position: 'Managing Director'},
    {name: 'Dharani', position: 'Project Manager'},
    {name: 'Charani', position: 'Division Manager'},
  ];
  model: any= {};
  model2: any= {};
  msg: any= '';

  addEmployee() {
    this.employees.push(this.model);
    this.model = {};
    this.msg = 'Record Saved Successfully........';
  }
  deleteEmployee(i) {
    this.employees.splice(i, 1);
    console.log(i);
    this.msg = 'Record Deleted Successfully........';
  }
  // tslint:disable-next-line:member-ordering
  myValue;
  editEmployee(k) {
    this.model2.name = this.employees[k].name;
    this.model2.position = this.employees[k].position;
    this.myValue = k;
  }
  updateEmployee() {
    const k = this.myValue;
    for (let i = 0; i < this.employees.length; i++) {
      if (i === k) {
        this.employees[i] = this.model2;
        this.model2 = {};
        this.msg = 'Record Updated Successfully........';
      }
    }
  }
  clickMe(){
    this.msg = '';
  }
}
