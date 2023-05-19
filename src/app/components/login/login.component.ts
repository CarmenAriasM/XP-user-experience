import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BackendConnectionService } from 'src/app/shared/services/backend-connection.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(public router: Router, public backendService: BackendConnectionService ) {}
  goToHomePage() {
    this.router.navigate(['home']);
  }
  sendData() {
    this.backendService.getData({data: 'nothing'}).subscribe((data: any) => {
      console.log(data)
    })
  }
}
