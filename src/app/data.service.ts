import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class DataService {
  members: any[] = [];

  constructor() {}

  addMember(member: any) {
    this.members.push(member);
    console.log('New member added:', member);
  }

  getMembers() {
    return this.members;
  }
}
