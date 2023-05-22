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
    {id_: 1, id: 'A', name: 'Persona A', image: 'assets/persona.png'},
    {id_: 2, id: 'B', name: 'Persona B', image: 'assets/persona.png'},
    {id_: 3, id: 'C', name: 'Persona C', image: 'assets/persona.png'},
    {id_: 4, id: 'D', name: 'Persona D', image: 'assets/persona.png'},
    {id_: 5, id: 'E', name: 'Persona E', image: 'assets/persona.png'},
    {id_: 6, id: 'F', name: 'Persona F', image: 'assets/persona.png'},
    {id_: 7, id: 'G', name: 'Persona G', image: 'assets/persona.png'}
  ]
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
    this.selectedCollege = '';
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
