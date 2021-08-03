import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Department } from '../model/department';
import { DepartmentService } from '../services/department.service';

@Component({
  selector: 'app-department-form',
  templateUrl: './department-form.component.html',
  styleUrls: ['./department-form.component.css']
})

export class DepartmentFormComponent  {
  @ViewChild('departmentForm', {static: false}) departmentForm: NgForm;
  department: Department;

  constructor(
    private route: ActivatedRoute, 
      private router: Router, 
        private departmentService: DepartmentService) {
    this.department = new Department();
  }

  onSubmit() {
  this.departmentService.save(this.department).subscribe();
  this.departmentForm.reset();

  //this.departmentService.Call().subscribe();
  }

  gotoUserList() {
    this.router.navigate(['/departments']);
  }

}
