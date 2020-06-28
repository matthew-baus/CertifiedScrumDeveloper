import { Component } from "@angular/core";
import { BowlingService } from './services/bowling.service';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.sass"]
})
export class AppComponent {
  totalForOneBall : number;
  totalForOneFrame : number;
  totalForTwoFrames : number;
  totalForGame : number;
  myGameTitle : string;

  constructor(
    private service: BowlingService
  ){
    const scores : number[] = [5,3,0,5,4,2,8,0,0,9,1,1,2,8,9,0,3,3,4,2]; //total = 69
    
    service.initDefaultGame(scores);

    this.totalForOneBall = service.getTotalForBall(6, 1)

    this.totalForOneFrame = service.getTotalForFrame(4)

    this.totalForTwoFrames = service.getTotalForTwoFrames(3,7)

    this.totalForGame = service.getTotalForGame()

    this.myGameTitle = "Unknown Team Name Game";
  }

  counter = 0;

  increment(): void {
    this.counter++;
  }

  decrement(): void {
    this.counter--
  }

  enter(gameTitle : string):void{
    this.myGameTitle = gameTitle;
  }
}