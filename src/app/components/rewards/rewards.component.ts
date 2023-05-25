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
  constructor(public localStorage: LocalStorageService, public backendService: BackendConnectionService) {}
  ngOnInit() {
    this.data = this.localStorage.get('userData');
    this.data = JSON.parse(this.data);
    console.log(this.data)
    this.userData = JSON.parse(this.localStorage.get('user')!);
    console.log(this.userData)
    this.reloadUser()
  }
  reloadUser() {
    const formData = new FormData();
    formData.append('userName', this.userData.userName );
    formData.append('IdUID', this.userData.IdUID );
    this.backendService.login(formData).subscribe((data: any) => {
      console.log(data)
      this.data = data;
    }); 
  }
}
