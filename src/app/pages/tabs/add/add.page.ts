import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage {
  selectedImage: string = '';
  firstname: string = '';
  lastname: string = '';
  dob: string = '';
  position: string = '';
  totalWins: number = 0;
  totalMatches: number = 0;
  jersey: string = '';
  club: string = '';

  constructor(private navCtrl: NavController) {}

  onImageSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.selectedImage = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }
  
  onSubmit() {
    // Handle form submission logic here
    // You can access the form values using the component properties
    const inputData = {
      firstname: this.firstname,
      lastname: this.lastname,
      dob: this.dob,
      position: this.position,
      totalWins: this.totalWins,
      totalMatches: this.totalMatches,
      jersey: this.jersey,
      club: this.club,
    };


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
    this.navCtrl.navigateForward('/team-list', { state: inputData});
  }
}