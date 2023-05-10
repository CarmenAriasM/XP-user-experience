import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  showBackData1: boolean = false;
  showBackData2: boolean = false;

  toggleData(number: number) {
    if(number == 1) {
      this.showBackData1 = true;
      this.showBackData2 = false;
    } else {
      this.showBackData2 = true;
      this.showBackData1 = false;
    }
  }
  hideAllData() {
    this.showBackData1 = false;
    this.showBackData2 = false;
  }
  preventDefault(e: Event) {
    e.preventDefault();  
    e.stopPropagation();
  }
}
