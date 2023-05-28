import { Component } from '@angular/core';
import { BackendConnectionService } from 'src/app/shared/services/backend-connection.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reg-page',
  templateUrl: './reg-page.component.html',
  styleUrls: ['./reg-page.component.css']
})
export class RegPageComponent {
  // Variables to show containers
  showForm: boolean = true;
  showCollege: boolean = false;
  showPersona: boolean = false;
  showThanks: boolean = false;
  colleges = [
    {id: 1, name: 'Aalto', image: 'assets/colleges/college-logo-1.png'},
    {id: 2, name: 'LiU', image: 'assets/colleges/college-logo-2.png'},
    {id: 3, name: 'KIT', image: 'assets/colleges/college-logo-3.png'},
    {id: 4, name: 'Mannheim', image: 'assets/colleges/college-logo-4.png'},
    {id: 5, name: 'd.school', image: 'assets/colleges/college-logo-5.png'},
    {id: 6, name: 'USP', image: 'assets/colleges/college-logo-6.png'},
    {id: 7, name: 'HPI', image: 'assets/colleges/college-logo-7.png'},
    {id: 8, name: "Côte d'Azur", image: 'assets/colleges/college-logo-8.png'},
    {id: 9, name: 'Javeriana', image: 'assets/colleges/college-logo-9.png'},
    {id: 10, name: 'ISDI', image: 'assets/colleges/college-logo-10.png'},
    {id: 11, name: 'SUTD', image: 'assets/colleges/college-logo-11.png'},
    {id: 12, name: 'TCD', image: 'assets/colleges/college-logo-12.png'},
    {id: 13, name: 'Other', image: 'assets/colleges/college-logo-13.png'}
  ];
  personas = [
    {id_: 1, id: 'A', name: 'Persona A', image: 'assets/persona.png'},
    {id_: 2, id: 'B', name: 'Persona B', image: 'assets/persona.png'},
    {id_: 3, id: 'C', name: 'Persona C', image: 'assets/persona.png'},
    {id_: 4, id: 'D', name: 'Persona D', image: 'assets/persona.png'},
    {id_: 5, id: 'E', name: 'Persona E', image: 'assets/persona.png'},
    {id_: 6, id: 'F', name: 'Persona F', image: 'assets/persona.png'},
    {id_: 7, id: 'G', name: 'Persona G', image: 'assets/persona.png'}
  ];
  selectedCollege!: string;
  selectedPersona!: string;

  // TODO Popup message 
  // wasItAsked: boolean = false;
  // END TODO Popup message 

  form: any;
  constructor(private fb: FormBuilder, public backendService: BackendConnectionService) {
    this.form = this.fb.group({
      userName: [''],
      IdUID:  ['']
    })
  }
  // Show form
  goToForm() {
    this.hideContainer('persona-container', 'persona')
    this.hideContainer('college-container', 'college')
    this.showContainer('reg-container', 'form')
  }
  // Show college options to choose from
  goToUniversitySelection() {
    this.hideContainer('reg-container', 'form')
    this.hideContainer('persona-container', 'persona')
    this.showContainer('college-container', 'college')
    this.selectedPersona = '';
    this.selectedCollege = '';
  }
  // Show persona options to choose from
  goToPersonaSelection() {
    this.hideContainer('college-container', 'college')
    this.showContainer('persona-container', 'persona')
    this.selectedPersona = '';
  }
  // Hide form or college container
  hideContainer(container: string, variable: string) {
    let containerStyle = document.getElementById(container);
    if(containerStyle) {
      containerStyle.classList.add('fadeOut')
    }
    if(variable == 'form') {
      setTimeout(() => {
        this.showForm = false;
      }, 900);
    }
    if(variable == 'college') {
      setTimeout(() => {
        this.showCollege = false;
      }, 900);
    }
    if(variable == 'persona') {
      setTimeout(() => {
        this.showPersona = false;
      }, 900);
    }
  }
  // Show college or persona container
  showContainer(container: string, variable: string) {
    let containerStyle = document.getElementById(container);
    if(containerStyle) {
      containerStyle.classList.remove('fadeOut')
    }
    if(variable == 'college') {
      setTimeout(() => {
        this.showCollege = true;
      }, 900);
    }
    if(variable == 'persona') {
      setTimeout(() => {
        this.showPersona = true;
      }, 900);
    }
    if(variable == 'form') {
      setTimeout(() => {
        this.showForm = true;
      }, 900);
    }
  }
  chooseCollege(id: any) {
    for(let number of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]) {
      document.getElementById('image' + number)?.classList.remove('border')
    }
    document.getElementById('image' + id)?.classList.add('border');
    this.selectedCollege = id;
    this.goToPersonaSelection();
  }
  choosePersona(id: string) {
    for(let letter of ['A', 'B', 'C', 'D', 'E', 'F', 'G']) {
      document.getElementById('imagePersona' + letter)?.classList.remove('border')
    }
    document.getElementById('imagePersona' + id)?.classList.add('border');
    this.selectedPersona = id;
  }
  sendToDB() {
    const formData = new FormData();
    formData.append('userName', this.form.get('userName').value );
    formData.append('IdUID', this.form.get('IdUID').value );
    formData.append('IdUniversity', this.selectedCollege);
    formData.append('IdPersona', this.selectedPersona);
    this.backendService.register(formData).subscribe((data: any) => {
      console.log(data)
    }, (error: Error) => { 
      console.log(error)
    }); 
    // TODO Popup message 
    // this.wasItAsked = false; 
    this.selectedCollege = '';
    this.selectedPersona = '';
    this.form.controls['userName'].reset();
    this.form.controls['IdUID'].reset();

    this.hideContainer('persona-container', 'persona')
    setTimeout(() => {
      this.showThanks = true;
    }, 1000);
    setTimeout(() => {
      this.showThanks = false;
      this.goToForm()
    }, 3000);
  }

}
