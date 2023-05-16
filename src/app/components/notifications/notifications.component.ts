import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent {
  current_time: String | undefined;
  ngOnInit() {
    let date = new Date();
    this.current_time = date.getHours() + ':' + date.getMinutes();
  }
}
