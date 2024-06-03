import { Component, EventEmitter, OnInit, output } from '@angular/core';
import { User } from '../model/user.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { passwordValidator } from '../../../../../assets/validators/password.validator';
import { ActivatedRoute, Route } from '@angular/router';
import { Router } from '@angular/router'; // Add this import

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent  {
  user: User = new User();
  edit: boolean = false;
  hide: boolean = true;

  userForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6), passwordValidator()]),
    birth: new FormControl('', [Validators.required]),
  });

  constructor(private router: Router) {}

  submitForm() {
    if(this.edit) {
      this.submitEdit();
    }
    else {
      this.submitCreate();
    }
  }

  submitEdit() {
    //TODO: Editar Item na API
    this.user = this.userForm.value;
    this.edit = false;
  }
  submitCreate() {
    //TODO: Criar Item na API
    console.log(this.userForm.value);

    this.router.navigate(['/dashboard']);
  }


}
