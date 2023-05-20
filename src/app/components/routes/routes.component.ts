import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-routes',
  templateUrl: './routes.component.html',
  styleUrls: ['./routes.component.css']
})
export class RoutesComponent {
  showBackData1: boolean = false;
  showBackData2: boolean = false;
  ngOnInit() {
    // Get user from api and assign it to user variable
  }
  toggleData(number: number) {
    if(number == 1) {
      this.showBackData1 = !this.showBackData1;
      this.showBackData2 = false;
    } else {
      this.showBackData2 = !this.showBackData2;
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
