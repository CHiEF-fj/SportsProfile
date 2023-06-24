import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage {
  firstName: string='';
  lastName: string='';
  dob: string='';
  position: string='';
  totalWins: number= 0;
  totalMatches: number=0;
  jersey: string = '';
  club: string='';
  selectedImage: any;

  constructor(private dataService: DataService, private navCtrl: NavController) {}

  onFileSelected(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files[0]) {
      const file = inputElement.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        this.selectedImage = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }

  saveData() {
    // Create a new member object with the form values
    const newMember = {
      firstName: this.firstName,
      lastName: this.lastName,
      dob: this.dob,
      position: this.position,
      totalWins: this.totalWins,
      totalMatches: this.totalMatches,
      jersey: this.jersey,
      club: this.club,
      image: this.selectedImage,
    };

    // Pass the new member object to the data service
    this.dataService.addMember(newMember);

    // Reset the form values
    this.firstName = '';
    this.lastName = '';
    this.dob = '';
    this.position = '';
    this.totalWins = 0;
    this.totalMatches = 0;
    this.jersey = '';
    this.club = '';
    this.selectedImage = 0;

    this.navCtrl.navigateForward('/team-list', { state: newMember});
  }
}