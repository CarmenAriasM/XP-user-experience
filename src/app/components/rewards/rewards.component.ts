import { Component, OnInit } from '@angular/core';
import { BackendConnectionService } from 'src/app/shared/services/backend-connection.service';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';

@Component({
  selector: 'app-rewards',
  templateUrl: './rewards.component.html',
  styleUrls: ['./rewards.component.css']
})
export class RewardsComponent {
  data: any;
  userData: any;
  clickedOnBuy: boolean = false;
  constructor(public localStorage: LocalStorageService, public backendService: BackendConnectionService) {}
  ngOnInit() {
    this.data = this.localStorage.get('userData');
    this.data = JSON.parse(this.data);
    console.log(this.data)
    this.userData = JSON.parse(this.localStorage.get('user')!);
    this.reloadUser()
  }
  reloadUser() {
    const formData = new FormData();
    formData.append('userName', this.userData.userName );
    formData.append('IdUID', this.userData.IdUID );
    this.backendService.login(formData).subscribe((data: any) => {
      this.data = data;
    }); 
  }
  buyIsClicked() {
    this.clickedOnBuy = true;
  }
  buyCoffee(number: number) {
    const formData = new FormData();
    formData.append('id', this.data.idUser );
    formData.append('value', number.toString() );
    this.backendService.substractPoints(formData).subscribe((data: any) => {
      console.log(data);
    }); 
  }
}
