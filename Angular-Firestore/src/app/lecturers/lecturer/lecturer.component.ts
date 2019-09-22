import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import {LecturerService} from 'src/app/shared/lecturer.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-lecturer',
  templateUrl: './lecturer.component.html',
  styleUrls: ['./lecturer.component.css']
})
export class LecturerComponent implements OnInit {

  constructor(private service: LecturerService,
    private firestore:AngularFirestore,
    private toastr:ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm){
    if(form !=null)
    form.reset();
    this.service.formData={
      id:null,
      fullName:"",
      position:"",
      lecId:"",
      mobile:"",
    }
}

onSubmit(form:NgForm){
  let data = Object.assign({}, form.value);
  delete data.id;
  if (form.value.id == null)
    this.firestore.collection('Lecturers').add(data);
  else
    this.firestore.doc('Lecturers/' + form.value.id).update(data);
  this.resetForm(form);
  this.toastr.success('Submitted successfully','Lecturer Register');
}

}
