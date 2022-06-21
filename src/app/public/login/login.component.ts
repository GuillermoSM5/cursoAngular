import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from 'src/app/Services/AuthService/auth-service.service';
import { StorageServiceService } from '../../Services/storageService/storage-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = this.fb.group({
    email: [
      'libreria@yopmail.com',
      [
        Validators.required,
        Validators.email,
        // Validators.pattern('^.*banorte.com.*$'),
      ],
    ],
    password: [
      'string',
      [
        ,
        Validators.required,
        // Validators.minLength(8),
        Validators.maxLength(12),
      ],
    ],
  });

  constructor(
    private loginService: AuthServiceService,
    private fb: FormBuilder,
    private storageService: StorageServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  async sendLogin() {
    console.log(this.loginForm.value);
    if (this.loginForm.valid) {
      const response = await this.loginService.login(this.loginForm.value);

      if (response === undefined) {
        return;
      }

      this.storageService.setSession(response?.data);
      this.router.navigate(['/bookshop']);
    }
  }
}
