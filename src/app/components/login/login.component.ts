import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BackendConnectionService } from 'src/app/shared/services/backend-connection.service';
import { FormBuilder } from '@angular/forms';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form: any;
  constructor(public router: Router, public localStorage: LocalStorageService, private fb: FormBuilder, public backendService: BackendConnectionService ) {
    this.form = this.fb.group({
      userName: [''],
      password:  ['']
    })
  }
  goToHomePage() {
    this.router.navigate(['home']); // delete this sentence when backend works so you have to login first
    this.sendData()
  }
  sendData() {
    const formData = new FormData();
    formData.append('userName', this.form.get('userName').value );
    formData.append('IdUID', this.form.get('password').value );
    this.backendService.login(formData).subscribe((data: any) => {
      console.log(data)
      this.localStorage.remove('userData')
      this.localStorage.set('userData', JSON.stringify(data));
      setTimeout(() => {
        this.router.navigate(['home']);
      }, 1000);
    }, (error: Error) => { 
      this.localStorage.remove('userData');
      console.log(error)
    }); 
  }
}
