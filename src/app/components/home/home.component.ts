import { Component } from '@angular/core';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  data: any;
  constructor(public localStorage: LocalStorageService) {}
  ngOnInit() {
    if(this.localStorage.get('userData')) {
      this.data = this.localStorage.get('userData');
      this.data = JSON.stringify(this.data);
      console.log(this.data)
    }

  }
  user: Object | undefined;
  wasItAsked: boolean = false;
  requestJson: Object | undefined;
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
    // If user hasnt chosen transport mode yet, then ->
    document.getElementById(value)?.classList.add('orange-bg')
    this.transport = value;
    this.openPopUp()
  }
  sendToDB() {
    this.requestJson = {
      transport_mode: this.transport
    }
    console.log(this.requestJson)
    this.wasItAsked = false; 
  }
}
