import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BackendConnectionService } from 'src/app/shared/services/backend-connection.service';
import { images } from 'src/app/shared/services/images';
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
  images = images;
  chosenCircleImage: any;
  chosenPointImage: any;
  chosenImage: any;
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
      this.checkImg()
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
  checkImg() {
    console.log(images)
    console.log(images.filter(e => e.id == 1))
    this.chosenImage = images.filter(e => e.id == 1)
    console.log(this.chosenImage)
    if(this.data.travelMode == 0) {
      this.chosenImage = images.filter(e => e.id == 29)
    }
    if(this.data.idPersona == 'A' && this.data.travelMode == -1) {
      this.chosenImage = images.filter(e => e.id == 1)
      // in html use {{chosenImage[0].image_circle or chosenImage[0].image_points}} in image url
    }
    if(this.data.idPersona == 'A' && this.data.travelMode == -2) {
      this.chosenImage = images.filter(e => e.id == 2)
    }
    if(this.data.idPersona == 'A' && this.data.travelMode == -3) {
      this.chosenImage = images.filter(e => e.id == 3)
    }
    if(this.data.idPersona == 'A' && this.data.travelMode == -4) {
      this.chosenImage = images.filter(e => e.id == 4)
    }
    if(this.data.idPersona == 'B' && this.data.travelMode == -1) {
      this.chosenImage = images.filter(e => e.id == 5)
    }
    if(this.data.idPersona == 'B' && this.data.travelMode == -2) {
      this.chosenImage = images.filter(e => e.id == 6)
    }
    if(this.data.idPersona == 'B' && this.data.travelMode == -3) {
      this.chosenImage = images.filter(e => e.id == 7)
    }
    if(this.data.idPersona == 'B' && this.data.travelMode == -4) {
      this.chosenImage = images.filter(e => e.id == 8)
    }
    if(this.data.idPersona == 'C' && this.data.travelMode == -1) {
      this.chosenImage = images.filter(e => e.id == 9)
    }
    if(this.data.idPersona == 'C' && this.data.travelMode == -2) {
      this.chosenImage = images.filter(e => e.id == 10)
    }
    if(this.data.idPersona == 'C' && this.data.travelMode == -3) {
      this.chosenImage = images.filter(e => e.id == 11)
    }
    if(this.data.idPersona == 'C' && this.data.travelMode == -4) {
      this.chosenImage = images.filter(e => e.id == 12)
    }
    if(this.data.idPersona == 'D' && this.data.travelMode == -1) {
      this.chosenImage = images.filter(e => e.id == 13)
    }
    if(this.data.idPersona == 'D' && this.data.travelMode == -2) {
      this.chosenImage = images.filter(e => e.id == 14)
    }
    if(this.data.idPersona == 'D' && this.data.travelMode == -3) {
      this.chosenImage = images.filter(e => e.id == 15)
    }
    if(this.data.idPersona == 'D' && this.data.travelMode == -4) {
      this.chosenImage = images.filter(e => e.id == 16)
    }
    if(this.data.idPersona == 'E' && this.data.travelMode == -1) {
      this.chosenImage = images.filter(e => e.id == 17)
    }
    if(this.data.idPersona == 'E' && this.data.travelMode == -2) {
      this.chosenImage = images.filter(e => e.id == 18)
    }
    if(this.data.idPersona == 'E' && this.data.travelMode == -3) {
      this.chosenImage = images.filter(e => e.id == 19)
    }
    if(this.data.idPersona == 'E' && this.data.travelMode == -4) {
      this.chosenImage = images.filter(e => e.id == 20)
    }
    if(this.data.idPersona == 'F' && this.data.travelMode == -1) {
      this.chosenImage = images.filter(e => e.id == 21)
    }
    if(this.data.idPersona == 'F' && this.data.travelMode == -2) {
      this.chosenImage = images.filter(e => e.id == 22)
    }
    if(this.data.idPersona == 'F' && this.data.travelMode == -3) {
      this.chosenImage = images.filter(e => e.id == 23)
    }
    if(this.data.idPersona == 'F' && this.data.travelMode == -4) {
      this.chosenImage = images.filter(e => e.id == 24)
    }
    if(this.data.idPersona == 'G' && this.data.travelMode == -1) {
      this.chosenImage = images.filter(e => e.id == 25)
    }
    if(this.data.idPersona == 'G' && this.data.travelMode == -2) {
      this.chosenImage = images.filter(e => e.id == 26)
    }
    if(this.data.idPersona == 'G' && this.data.travelMode == -3) {
      this.chosenImage = images.filter(e => e.id == 27)
    }
    if(this.data.idPersona == 'G' && this.data.travelMode == -4) {
      this.chosenImage = images.filter(e => e.id == 28)
    }
  }
}
