import { Component } from "@angular/core";
import { BowlingService } from './services/bowling.service';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.sass"]
})
export class AppComponent {

  constructor(
    private service: BowlingService
  ){
    //service.initDefaultGame();
  }
  counter = 0;

  increment(): void {
    this.counter++;
  }

  decrement(): void {
    this.counter--
  }

  enter():void{}
}