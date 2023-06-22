import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage {
  firstname: string = '';
  lastname: string = '';
  dob: string = '';
  position: string = '';
  totalWins: number = 0;
  totalMatches: number = 0;
  jersey: string = '';
  club: string = '';

  constructor(private navCtrl: NavController) {}

  onSubmit() {
    // Handle form submission logic here
    // You can access the form values using the component properties
    console.log('Form submitted:', this.firstname, this.lastname, this.dob, this.position, this.totalWins, this.totalMatches, this.jersey, this.club);

    // Reset the form fields after submission if needed
    this.firstname = '';
    this.lastname = '';
    this.dob = '';
    this.position = '';
    this.totalWins = 0;
    this.totalMatches = 0;
    this.jersey = '';
    this.club = '';

    // Optionally, navigate to another page after form submission
    this.navCtrl.navigateForward('/team-list');
  }
}