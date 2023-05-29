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

  chosenTravelMode: boolean = false;

  user: Object | undefined;
  wasItAsked: boolean = false;
  transport!: string;
  constructor(public localStorage: LocalStorageService, public backendService: BackendConnectionService,  public router: Router) {
    this.previousUrl = this.router.getCurrentNavigation()?.previousNavigation?.finalUrl?.toString();
  }
  ngOnInit() {
    this.data = JSON.parse(this.localStorage.get('userData')!);
    this.userData = JSON.parse(this.localStorage.get('user')!);
    if(this.previousUrl != 'login') {
      this.reloadUser()
    }
    console.log(this.data)
    if(this.data.travelMode > 0) {
      this.chosenTravelMode = true;
    }
  }
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
    formData.append('userName', this.userData.userName );
    formData.append('IdUID', this.userData.IdUID );
    this.backendService.login(formData).subscribe((data: any) => {
      this.data = data;
      console.log(data)
      this.localStorage.remove('userData')
      this.localStorage.set('userData', JSON.stringify(data));
    }); 
  }
  sendToDB() {
    const formData = new FormData();
    formData.append('travelMode', this.transport);
    formData.append('id', this.data.idUser);
    this.backendService.setTravelMode(formData).subscribe((data: any) => {
      this.chosenTravelMode = true;
      this.reloadUser();
    }, (error: Error) => { 
      console.log(error)
    }); 
    this.wasItAsked = false; 
  }
}
