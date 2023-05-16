import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-routes',
  templateUrl: './routes.component.html',
  styleUrls: ['./routes.component.css']
})
export class RoutesComponent {
  user: Object | undefined;
  wasItAsked: boolean = false;
  requestJson: Object | undefined;
  transport!: string;
  ngOnInit() {
    // Get user from api and assign it to user variable
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
