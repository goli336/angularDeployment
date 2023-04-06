import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-list',
  template: `
    <h2>
      student-list works!
    </h2>
    <ul *ngFor="let x of students">
      <li>
        {{x.name}}
      </li>
    
    </ul>

    <ul *ngFor="let x of dummyData">
      <li>
        {{x.name}}
      </li>
    
    </ul>
  `,
  styles: [
  ]
})
export class StudentListComponent implements OnInit {

  students:any = [];
  dummyData :any = [];
  constructor(private _stdService: StudentService) { }

  ngOnInit(){
    this._stdService.getStudents().subscribe((res) => {
      console.log(res);
      
      this.students = res;
    })

    this.dummyData = this._stdService.getDummyData()

    console.log(this.dummyData);
    
  }


}
