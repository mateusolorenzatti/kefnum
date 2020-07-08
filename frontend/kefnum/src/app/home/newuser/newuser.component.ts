import { Component, OnInit } from '@angular/core';
import { ThemeManagerService } from 'src/app/core/theme/theme-manager.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/core/user/user';
import { UserService } from 'src/app/core/user/user.service';

@Component({
  selector: 'kef-newuser',
  templateUrl: './newuser.component.html'
})
export class NewUserComponent implements OnInit {

  newUserForm: FormGroup;

  requestsent: boolean = false;
  success: boolean = false;

  constructor(
    private theme: ThemeManagerService,
    private formBuilder: FormBuilder,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.newUserForm = this.formBuilder.group({
      first_name: ['',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(40)
        ]
      ],
      last_name: ['',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(50)
        ]
      ],
      username: ['',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(30)
        ]
      ],
      email: ['',
        [
          Validators.required,
          Validators.email
        ]
      ],
      password: ['',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(14),
        ]
      ]
    });

    setTimeout(() => {
      this.theme.applyTheme();
    }, 5);
  }

  createUser() {
    const newUser = this.newUserForm.getRawValue() as User;

    this.userService
      .newUser(newUser)
      .subscribe(
        () => {
          this.requestsent = true;
          this.success = true;
        },
        err => {
          console.log(err);
          this.requestsent = true;
        }
      );
  }

  retry(){
    this.requestsent = false;
    this.success = false;

    this.newUserForm.reset();
    setTimeout(() => {
      this.theme.applyTheme();
    }, 5);
  }

}
