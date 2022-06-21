import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertserviceService } from 'src/app/Services/alertService/alertservice.service';
import { ClientServiceService } from '../../../Services/ClientService/client-service.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css'],
})
export class ChangePasswordComponent implements OnInit {
  user: FormGroup = this.fb.group({
    newPassword: [
      '',
      [Validators.required, Validators.minLength(5), Validators.maxLength(12)],
    ],
  });
  id: string = '';
  constructor(
    private fb: FormBuilder,
    private clientService: ClientServiceService,
    private alertService: AlertserviceService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') || '';
  }

  async changePassword() {
    if (this.user.valid) {
      console.log(this.user.value);
      const Response = await this.clientService.changePassword({
        ...this.user.value,
        id: this.id,
      });
      if (Response?.data) {
        this.alertService.error(Response?.message || '');
        this.router.navigate(['/bookshop/client-list']);
      }
    }
  }
}
