import { Component } from '@angular/core';

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
    {id: 1, name: 'College 1', image: 'assets/college-logo.png'},
    {id: 2, name: 'College 2', image: 'assets/college-logo.png'},
    {id: 3, name: 'College 3', image: 'assets/college-logo.png'},
    {id: 4, name: 'College 4', image: 'assets/college-logo.png'},
    {id: 5, name: 'College 5', image: 'assets/college-logo.png'},
    {id: 6, name: 'College 6', image: 'assets/college-logo.png'},
    {id: 7, name: 'College 7', image: 'assets/college-logo.png'},
    {id: 8, name: 'College 8', image: 'assets/college-logo.png'},
    {id: 9, name: 'College 9', image: 'assets/college-logo.png'},
    {id: 10, name: 'College 10', image: 'assets/college-logo.png'},
    {id: 11, name: 'College 11', image: 'assets/college-logo.png'},
    {id: 12, name: 'Other', image: 'assets/college-logo.png'}
  ]
  personas = [
    {id_: 1, id: 'a', name: 'Persona 1', image: 'assets/persona.png'},
    {id_: 2, id: 'b', name: 'Persona 2', image: 'assets/persona.png'},
    {id_: 3, id: 'c', name: 'Persona 3', image: 'assets/persona.png'},
    {id_: 4, id: 'd', name: 'Persona 4', image: 'assets/persona.png'},
    {id_: 5, id: 'e', name: 'Persona 5', image: 'assets/persona.png'},
    {id_: 6, id: 'f', name: 'Persona 6', image: 'assets/persona.png'},
    {id_: 7, id: 'g', name: 'Persona 7', image: 'assets/persona.png'},
    {id_: 8, id: 'h', name: 'Persona 8', image: 'assets/persona.png'}
    /* {id_: 9, id: 'a', name: 'Persona 9', image: 'assets/persona.png'},
    {id_: 10, id: 'a', name: 'Persona 10', image: 'assets/persona.png'},
    {id_: 11, id: 'a', name: 'Persona 11', image: 'assets/persona.png'},
    {id_: 12, id: 'a', name: 'Other', image: 'assets/persona.png'} */
  ]
  selectedCollege: number | undefined;
  selectedPersona: string | undefined;
  selectedGender: string | undefined = 'female';
  personDetails: Object = {name: '', uid: ''};
  personName: any;
  personUid: any;
  requestJson: any;
  // TODO Popup message 
  // wasItAsked: boolean = false;
  // END TODO Popup message 

  // Show form
  goToForm() {
    this.hideContainer('persona-container', 'persona')
    this.hideContainer('college-container', 'college')
    this.showContainer('reg-container', 'form')
  }
  // Show college options to choose from
  goToUniversitySelection() {
    this.personDetails = { name: this.personName, uid: this.personUid }
    this.hideContainer('reg-container', 'form')
    this.hideContainer('persona-container', 'persona')
    this.showContainer('college-container', 'college')
  }
  // Show persona options to choose from
  goToPersonaSelection() {
    this.hideContainer('college-container', 'college')
    this.showContainer('persona-container', 'persona')
    this.requestJson = {
      ...this.personDetails, college_id: this.selectedCollege
    }
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
  chooseCollege(id: number) {
    for(let i = 0; i < 13; i++) {
      document.getElementById('image' + i)?.classList.remove('border')
    }
    document.getElementById('image' + id)?.classList.add('border');
    this.selectedCollege = id;
    this.goToPersonaSelection();
  }
  choosePersona(id: string) {
    for(let i = 0; i < 13; i++) {
      document.getElementById('imagePersona' + i)?.classList.remove('border')
    }
    document.getElementById('imagePersona' + id)?.classList.add('border');
    this.selectedPersona = id;
  }
  chooseGender(gender: string) {
    this.selectedGender = gender;
  }
  // TODO Popup message 
 /*  openPopUp() {
    this.wasItAsked = true;
  } */
  // END TODO Popup message 
  sendToDB() {
    this.requestJson = {
      ...this.personDetails, college_id: this.selectedCollege, persona_id: this.selectedPersona, gender: this.selectedGender
    }
    console.log(this.requestJson)
    // TODO Popup message 
    // this.wasItAsked = false; 
    this.personDetails = {}
    this.selectedCollege = undefined;
    this.selectedPersona = undefined;
    this.personName = '';
    this.personUid = '';
    this.requestJson = {};
    this.hideContainer('persona-container', 'persona')
    setTimeout(() => {
      this.showThanks = true;
    }, 1000);
    setTimeout(() => {
      this.showThanks = false;
      this.goToForm()
    }, 3000);
  }
  // TODO Popup message 
  /* closePopUp() {
    this.wasItAsked = false;
  } */
  // END TODO Popup message 
}
