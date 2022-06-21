import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientServiceService } from '../../../Services/ClientService/client-service.service';
import { AlertserviceService } from '../../../Services/alertService/alertservice.service';

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.css'],
})
export class DetailUserComponent implements OnInit {
  user: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    lastName: ['', [Validators.required]],
    secondLastName: [''],
    roleId: ['', [Validators.required]],
  });
  id: string = '';
  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private clientService: ClientServiceService,
    private alertService: AlertserviceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') || '';

    this.user.reset({ ...this.clientService.getClient });
  }

  async registerUser() {
    if (this.user.valid) {
      console.log(this.user.value);
      const respuesta = await this.clientService.modifyClient(
        this.user.value,
        this.id
      );
      if (respuesta?.data) {
        this.alertService.error(respuesta?.message || '');
        this.router.navigate(['/bookshop/client-list']);
      }
    }
  }

  async deleteUser() {
    const respuesta = await this.clientService.deleteUser(this.id);
    console.log(respuesta);
    if (respuesta?.data) {
      this.alertService.error(respuesta?.message || '');
      this.router.navigate(['/bookshop/client-list']);
    }
  }

  changePassword() {
    this.router.navigate(['/bookshop/change-password', this.id]);
  }
}
