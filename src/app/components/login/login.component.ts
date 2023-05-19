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
    const formData = new FormData();
        formData.append('userName', 'NamePerson');
        formData.append('password', 'secret1234');
    this.backendService.getData(formData).subscribe((data: any) => {
      console.log(data)
    })
  }
}
