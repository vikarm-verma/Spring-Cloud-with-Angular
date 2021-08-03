import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../model/user';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent  {

  @ViewChild('userForm', {static: false}) userForm: NgForm;
  user: User;

  constructor(
    private route: ActivatedRoute, 
      private router: Router, 
        private userService: UserServiceService) {
    this.user = new User();
  }

  onSubmit() {
 this.userService.save(this.user).subscribe();
 this.userForm.reset();
  //this.userService.Call().subscribe();
  }

  gotoUserList() {
    this.router.navigate(['/users']);
  }
}


