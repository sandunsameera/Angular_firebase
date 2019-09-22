import { Injectable } from '@angular/core';
import { Lecturer } from './lecturer.model';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class LecturerService {
  formData: Lecturer;

  constructor(private firestore: AngularFirestore) { }

  getLecturers(){
    return this.firestore.collection('Lecturers').snapshotChanges();
  }
}
