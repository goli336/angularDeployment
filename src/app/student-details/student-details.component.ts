import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-details',
  template: `
    <p>
      student-details works!
    </p>
    <ul *ngFor="let x of students">
      <li>
        {{x.name}}
      </li>
    
    </ul>
  `,
  styles: [
  ]
})
export class StudentDetailsComponent implements OnInit {
  public students: any=[];
  constructor(private _stdService: StudentService) { }

  ngOnInit(){
   this.students=this._stdService.getDummyData();
  }

}
