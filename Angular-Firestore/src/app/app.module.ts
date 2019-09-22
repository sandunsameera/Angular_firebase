import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AngularFireModule} from '@angular/fire';
import{AngularFirestoreModule} from '@angular/fire/firestore';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { LecturersComponent } from './lecturers/lecturers.component';
import { LecturerComponent } from './lecturers/lecturer/lecturer.component';
import { LecturerListComponent } from './lecturers/lecturer-list/lecturer-list.component';
import { LecturerService } from './shared/lecturer.service';
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ToastrModule} from "ngx-toastr"

@NgModule({
  declarations: [
    AppComponent,
    LecturersComponent,
    LecturerComponent,
    LecturerListComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [LecturerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
