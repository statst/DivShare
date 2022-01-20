import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  public employeeID: string;
  public firstName: string;
  public lastName: string;
  public salary: string;
  public DOB: string;
  public email: string;
  public action: string;
  

  constructor() { 
    this.employeeID = "";
    this.firstName = "";
    this.lastName = "";
    this.salary = "";
    this.DOB = "";
    this.email = "";
    this.action = "";
  }

  ngOnInit(): void {


  }

}
