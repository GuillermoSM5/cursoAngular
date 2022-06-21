import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertserviceService } from 'src/app/Services/alertService/alertservice.service';
import { ClientServiceService } from '../../../Services/ClientService/client-service.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css'],
})
export class RegisterUserComponent implements OnInit {
  user: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    lastName: ['', [Validators.required]],
    password: [
      '',
      [Validators.required, Validators.minLength(5), Validators.maxLength(12)],
    ],
    secondLastName: [''],
    roleId: ['', [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private userServise: ClientServiceService,
    private alertService: AlertserviceService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  async registerUser() {
    if (this.user.valid) {
      const response = await this.userServise.registerClient(this.user.value);
      if (response?.data) {
        this.alertService.error('Usuario creado exitosamente');
        this.router.navigate(['/bookshop/client-list']);
      }
    }
  }
}
