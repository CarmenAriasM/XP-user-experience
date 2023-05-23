import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';

@Component({
  selector: 'app-rewards',
  templateUrl: './rewards.component.html',
  styleUrls: ['./rewards.component.css']
})
export class RewardsComponent {
  data: any;
  constructor(public localStorage: LocalStorageService) {}
  ngOnInit() {
    if(this.localStorage.get('userData')) {
      this.data = this.localStorage.get('userData');
      this.data = JSON.parse(this.data);
      console.log(this.data)
    }
  }
}
