import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/shared/services/local-storage.service';
import { colleges } from 'src/app/shared/services/colleges';
import { BackendConnectionService } from 'src/app/shared/services/backend-connection.service';

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
  userData: any;

  averageScore: any;
  universityScore: any;

  people: any = [];
  position: any = '';
  constructor(public router: Router, public localStorage: LocalStorageService, public backendService: BackendConnectionService) {
    this.previousUrl = this.router.getCurrentNavigation()?.previousNavigation?.finalUrl?.toString();
  }
  ngOnInit() {
    if(this.previousUrl == '/notifications') {
      this.leaderboards = false;
    }
    this.data = this.localStorage.get('userData');
    this.data = JSON.parse(this.data);
    this.userData = JSON.parse(this.localStorage.get('user')!);
    this.reloadUser()
  }
  getCollegeLeaderboard() {
    this.backendService.getCollegeLeaderboard(this.data.idUniversity).subscribe((data: any) => {
      this.people = data;
      this.position = this.people.map(function(e: any) { return e.name; }).indexOf(this.data.name);
      // this.averageScore = data.averageScore;
      // this.universityScore = data.universityScore; 
    }); 
  }
  getCollegeScore() {
    this.backendService.getScore(this.data.idUniversity).subscribe((data: any) => {
      console.log(data)
      this.averageScore = data[1];
      this.universityScore = data[0]; 
    }); 
  }
  reloadUser() {
    const formData = new FormData();
    formData.append('userName', this.userData.userName );
    formData.append('IdUID', this.userData.IdUID );
    this.backendService.login(formData).subscribe((data: any) => {
      this.data = data;
      this.collegeName = colleges.filter(x => x.id == Number(this.data.idUniversity));
      this.getCollegeLeaderboard()
      this.getCollegeScore()
    }); 
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
