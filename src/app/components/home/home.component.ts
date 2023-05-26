import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BackendConnectionService } from 'src/app/shared/services/backend-connection.service';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  data: any;
  userData: any;
  previousUrl: any;
  constructor(public localStorage: LocalStorageService, public backendService: BackendConnectionService,  public router: Router) {
    this.previousUrl = this.router.getCurrentNavigation()?.previousNavigation?.finalUrl?.toString();
  }
  ngOnInit() {
    this.data = JSON.parse(this.localStorage.get('userData')!);
    console.log(this.data)
    this.userData = JSON.parse(this.localStorage.get('user')!);
    console.log(this.userData)
    if(this.previousUrl != 'login') {
      this.reloadUser()
    }
  }
  user: Object | undefined;
  wasItAsked: boolean = false;
  transport!: string;
  openPopUp() {
    this.wasItAsked = true;
  }
  closePopUp() {
    this.wasItAsked = false;
    document.getElementById(this.transport)?.classList.remove('orange-bg')
  }
  chooseTransport(value: string) {
    console.log(value)
    if(this.data.travelMode == 0) {
      document.getElementById(value)?.classList.add('orange-bg')
      this.transport = value;
      this.openPopUp()
    }
  }
  reloadUser() {
    const formData = new FormData();
    console.log(this.userData);
    formData.append('userName', this.userData.Name );
    formData.append('IdUID', this.userData.IdUID );
    this.backendService.login(formData).subscribe((data: any) => {
      console.log(data)
      this.data = data;
    }); 
  }
  sendToDB() {
    const formData = new FormData();
    formData.append('travelMode', this.transport);
    formData.append('id', this.data.idUser);
    this.backendService.setTravelMode(formData).subscribe((data: any) => {
      console.log(data)
      this.reloadUser();
    }, (error: Error) => { 
      console.log(error)
    }); 
    this.wasItAsked = false; 
  }
}
