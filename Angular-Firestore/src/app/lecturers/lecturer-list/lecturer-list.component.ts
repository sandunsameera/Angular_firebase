import { Component, OnInit } from '@angular/core';
import { LecturerService } from 'src/app/shared/lecturer.service';
import { Lecturer } from 'src/app/shared/lecturer.model';

@Component({
  selector: 'app-lecturer-list',
  templateUrl: './lecturer-list.component.html',
  styleUrls: ['./lecturer-list.component.css']
})
export class LecturerListComponent implements OnInit {

  L
  list :Lecturer[];
  constructor(private service:LecturerService) { }

  ngOnInit() {
    this.service.getLecturers().subscribe(
      actionArray=>{
        this.list= actionArray.map(item=>{

          return {
            id:item.payload.doc.id,
            ...item.payload.doc.data()} as Lecturer;
        })
      }
    )
  }

}
