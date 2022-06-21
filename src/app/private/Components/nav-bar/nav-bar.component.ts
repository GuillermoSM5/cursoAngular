import { Component, OnInit } from '@angular/core';
import { StorageServiceService } from '../../../Services/storageService/storage-service.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  constructor(private storageService: StorageServiceService) {}

  ngOnInit(): void {}

  logout() {
    console.log('cerrar sesion');
    this.storageService.closeSession();
  }
}
