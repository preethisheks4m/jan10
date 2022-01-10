import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss']
})
export class KeyboardComponent implements OnInit {
  todayDate:any=new Date();
  isDisabled: boolean=false;

  cars=['bmw','hyndai','honda','audi','mahendra'];

  constructor() { }

  ngOnInit(): void {
  }
  onKeyUp(event:any){
    console.log(event);
    this.isDisabled = !this.isDisabled;

  }
  onClick(){
    this.isDisabled=!this.isDisabled;
  }

}
