import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(
    private _http: HttpClient
  ) { }


  data = [
    {
        "id": 1,
        "name": "rama"
    },
    {
        "id": 2,
        "name": "krishna"
    },
    {
        "id": 3,
        "name": "rakhi"
    },
    {
        "id": 4,
        "name": "kirrak"
    }
]
  
  getStudents(){ 
    return this._http.get('../assets/dummy.json');
  }

  getDummyData () {
    return this.data
  }
}
