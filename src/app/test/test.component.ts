import { getLocaleDateFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <p>
        Welcome to {{name}}
    </p>
    <p>
      {{name.length}}
    </p>
    <p>
      {{name.toUpperCase()}}
    </p>
    <p>
    {{userName()}}
    </p>
    <br>


    <input [id]="courseId" type="text" value="enter your name">
    <input id="{{courseId}}" type="text" value="enter your name">
    <input disabled="false" id="{{courseId}}" type="text" value="enter your name">
    <br>
    <input [disabled]="false" id="{{courseId}}" type="text" value="enter your name">
    <br>
    <input [disabled]="isDisabled" id="{{courseId}}" type="text" value="enter your name">
    <br>
    <h2 class="textcolor">hello rk</h2>
    <h2 [class]="size">hello rk</h2>
    <h2 [class.textstyle]="required">hello rk</h2>
    <h2 [ngClass]="group">hello group</h2>
    <h3 [style.color]="'blue'">hello style binding</h3>
    <h3 [style.color]="styleColor">hello style binding</h3>
    <h3 [style.color]="required?'green':'orange'">hello style binding</h3>
    <h3 [ngStyle]="styleGroup">hello group style binding</h3>


  `,
  styles: [`
  p{
    text-align:center;
    font-size:30px;
    color:blue;
  }
  .textcolor{
    text-align:center;
    color:red;
  }
  .textsize{
    font-size:70px;
  }
  .textstyle{
    font-style:italic;
  }

  `
  ]
})
export class TestComponent implements OnInit {
  public name="Tanvitha";
  public courseId="123";
  public isDisabled=false;
  public size="textsize";
  public required=true;
  public group={
    "textcolor":this.required,
    "textsize":!this.required,
    "textstyle":this.required
  }
  public styleColor="pink";
  public styleGroup={
    color:"gold",
    fontStyle:"italic",
    fontSize:"30px"
  }
  constructor() { }

  ngOnInit(): void {
  }
  userName(){
    return "welcome "+this.name;
  }

}
