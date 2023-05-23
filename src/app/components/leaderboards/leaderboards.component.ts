import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import { colleges } from 'src/app/shared/services/colleges';

@Component({
  selector: 'app-leaderboards',
  templateUrl: './leaderboards.component.html',
  styleUrls: ['./leaderboards.component.css']
})
export class LeaderboardsComponent {
  leaderboards: boolean = true;
  showLunchLeaderboard: boolean = false;
  showOnlineSalesLeaderboard: boolean = false;
  previousUrl;
  denied: boolean = false;
  accepted: boolean = false;
  collegeName: any;
  data: any;
  constructor(public router: Router, public localStorage: LocalStorageService) {
    this.previousUrl = this.router.getCurrentNavigation()?.previousNavigation?.finalUrl?.toString();
  }
  ngOnInit() {
    if(this.previousUrl == '/notifications') {
      this.leaderboards = false;
    }
    if(this.localStorage.get('userData')) {
      this.data = this.localStorage.get('userData');
      this.data = JSON.parse(this.data);
      console.log(this.data)
      this.collegeName = colleges.filter(x => x.id == this.data.idUniversity);
      console.log(this.collegeName)
    }
  }
  showLeaderboard(leaderboard: string) {
    let arrow = document.getElementById(leaderboard + '-arrow') as HTMLElement | null;
    if(arrow?.classList.contains('rotated')) {
      arrow.classList.remove('rotated')
    } else {
      arrow!.classList.add('rotated')
    }
    if(leaderboard == 'lunch') {
      this.showLunchLeaderboard = !this.showLunchLeaderboard;
    }
    if(leaderboard == 'online-sales') {
      this.showOnlineSalesLeaderboard = !this.showOnlineSalesLeaderboard;
    }
  }
  toggleLeaderboards(section: string) {
    if(section == 'friends') {
      this.leaderboards = false;
      this.showLunchLeaderboard = false;
      this.showOnlineSalesLeaderboard = false;
    } else {
      this.leaderboards = true;
    }
  }
  denyRequest() {
    this.denied = true;
  }
  acceptRequest() {
    this.accepted = true;
  }
}
