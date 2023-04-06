import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-test-event-binding',
  template: `
    <p>
      test-event-binding works!
    </p>
    <br>
    <button (click)="onClick1()" type="button">clickMe1</button>
    <br>
    <button (click)="onClick2()" type="button">clickMe2</button>
    <h2>{{greetings}}</h2>
    <br>
    <input #msg type="text">
    <button (click)="message(msg.value)" type="button">clickMe3</button>
    <br>
    <br>
    <input [(ngModel)]=data type="text">
    <button type="button">clickMe4</button>
    <br>
    {{data}}
    <br>
    <h1 *ngIf="status; then trueBlock else elseBlock">welcome to {{city}}</h1>
    <ng-template #elseBlock>
      <h2>hi else block{{city}}</h2>
    </ng-template>

    <ng-template #trueBlock>
      <h2>hi true block{{city}}</h2>
    </ng-template>

    <div [ngSwitch]="myChoice">
      <div *ngSwitchCase="'one'">First block</div>
      <div *ngSwitchCase="'two'">Second block</div>
      <div *ngSwitchCase="'third'">Third block</div>
      <div *ngSwitchDefault>Default block</div>
    </div>

    <div *ngFor="let x of subjects; index as i">
      <h2>{{i}}==>{{x}}</h2>
    </div>

    <h2>{{FromParent}}</h2>

    <button (click)="fireEvent()">clickMe4</button>

    <h2>{{name}}</h2>
    <h2>{{name | lowercase}}</h2>
    <h2>{{name | uppercase}}</h2>
    <h2>{{wish | titlecase}}</h2>
    <h2> {{wish | slice:3}}</h2>
    <h2> {{wish | slice:3:7}}</h2>
    <h2>{{person | json}}</h2>
    <h2>{{5.678 | number:'1.2-3'}}</h2>
    <h2>{{5.678 | number:'4.5-7'}}</h2>
    <h2>{{5.678 | number:'2.1-2'}}</h2>
    <h2>{{0.25 | percent}}</h2>
    <h2>{{0.25 | currency}}</h2>
    <h2>{{0.25 | currency:'INR'}}</h2>

    <h2>{{date}}</h2>
    <h2>{{date | date:'short'}}</h2>
    <h2>{{date | date:'shortDate'}}</h2>
    <h2>{{date | date:'shortTime'}}</h2>
    <h2>{{date | date:'medium'}}</h2>
    <h2>{{date | date:'mediumDate'}}</h2>
    <h2>{{date | date:'mediumTime'}}</h2>
    <h2>{{date | date:'long'}}</h2>
    <h2>{{date | date:'longDate'}}</h2>
    <h2>{{date | date:'longTime'}}</h2>

  `,
  styles: [
    
    `
    h2{
      font-align:center;
      font-size:30px;
      color:green;
    }
    `
  ]
})
export class TestEventBindingComponent implements OnInit {
  public greetings="";
  public data="";
  public city="hyderabad";
  public status=true;
  public myChoice="four";
  public subjects=["angular","react","vue"];
  @Input() public FromParent: any;
  @Output() public childInfo=new EventEmitter();
  public name="RamaKRisHna";
  public wish="Welome To hyderabad";
  public person={
    "firstName":"ramakrishna",
    "lastName":"goli"
  }
  public date=new Date();

  constructor() { }

  ngOnInit(): void {
  }

  onClick1()
  {
    console.log("hello event");
  }
  onClick2()
  {
    this.greetings="welcome rk";
  }
  message(hello: any){
    console.log(hello);
  }
  fireEvent(){
    this.childInfo.emit("from child");
  }

}
