import { SaveStudentReactComponent } from './component/SaveStudentReact/SaveStudentReact.component';
import { SaveFacultyComponent } from './component/SaveFaculty/SaveFaculty.component';
import { SaveStudentComponent } from './component/SaveStudent/SaveStudent.component';
import { HomeComponent } from './component/Home/Home.component';
import { SubjectComponent } from './component/Subject/Subject.component';
import { FacultyComponent } from './component/Faculty/Faculty.component';
import { PageNotFoundComponent } from './component/PageNotFound/PageNotFound.component';
import { StudentComponent } from './component/Student/Student.component';
import { Route, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeacherComponent } from './component/Teacher/Teacher.component';

const routes : Route[] = [
  {path: 'Faculty', component: FacultyComponent},
  {path: 'Teacher', component: TeacherComponent},
  {path: 'Student', component: StudentComponent},
  {path: 'Subject', component: SubjectComponent},
  {path: 'SaveStudentReact', component: SaveStudentReactComponent},
  {path: 'Home', component: HomeComponent },
  {path: '',redirectTo: "/Home",pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    PageNotFoundComponent,
    FacultyComponent,
    TeacherComponent,
    SubjectComponent,
    SaveStudentComponent,
    SaveStudentReactComponent,
    SaveFacultyComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
