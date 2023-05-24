import { Component } from '@angular/core';
import { BackendConnectionService } from 'src/app/shared/services/backend-connection.service';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  data: any;
  constructor(public localStorage: LocalStorageService, public backendService: BackendConnectionService) {}
  ngOnInit() {
    this.data = JSON.parse(this.localStorage.get('userData')!);
    console.log(this.data)
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
  sendToDB() {
    const formData = new FormData();
    formData.append('travelMode', this.transport);
    formData.append('id', this.data.idUID);
    this.backendService.setTravelMode(formData).subscribe((data: any) => {
      console.log(data)
    }, (error: Error) => { 
      console.log(error)
    }); 
    this.wasItAsked = false; 
  }
}
