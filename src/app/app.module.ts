import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MasterComponent } from './master/master.component';
import { PrincipalComponent } from './principal/principal.component';
import { TestComponent } from './test/test.component';
import { TestEventBindingComponent } from './test-event-binding/test-event-binding.component';
import { FormsModule } from '@angular/forms';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentService} from './student.service';

@NgModule({
  declarations: [
    AppComponent,
    MasterComponent,
    PrincipalComponent,
    TestComponent,
    TestEventBindingComponent,
    StudentDetailsComponent,
    StudentListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
