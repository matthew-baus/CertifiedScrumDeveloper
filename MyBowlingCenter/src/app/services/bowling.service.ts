import { Injectable } from '@angular/core';
import { Frame } from '../models/frame.model';

@Injectable({
  providedIn: 'root'
})
export class BowlingService {

  numOfBalls: number = 2;
  numOfFrames: number = 10;
  currentFrame: number = 1;
  game: Frame[];

  constructor() { }

  initGame(numOfFrames: number, numOfBalls: number){

    this.numOfFrames = numOfFrames;
    this.numOfBalls = numOfBalls;
    
    for(let frame: number; frame <= numOfFrames; frame++){
      
      let frame = new Frame();
      frame.numOfBalls = numOfBalls;
      
      this.game.push(frame);
    }
  }

  setNumOfBalls(numOfBalls: number){
    this.numOfBalls = numOfBalls;
  }

  setNumOfFrames(numOfFrames: number){
    this.numOfFrames = numOfFrames;
  }

  getTotalForFrame(frameNum: number){
    
    if(!this.isValidFrame(frameNum))
      return 0;
    
    this.game[frameNum].getTotal();  
  }

  getTotalForBall(frameNum: number, ballNum: number){

    if(!this.isValidFrame(frameNum))
      return 0;
    
    if(!this.isValidBall(ballNum, this.game[frameNum]))
      return 0;
    

    return this.game[frameNum].balls[ballNum];
  }

  getTotalForTwoFrames(frameNum1: number, frameNum2: number){
    
    if(!this.isValidFrame(frameNum1) || !this.isValidFrame(frameNum2))
     return 0;
    
     return (this.game[frameNum1].getTotal() + this.game[frameNum2].getTotal());
  }

  getTotalForGame() : number {
    
    let total: number = 0;
    this.game.forEach(frame => total += frame.getTotal())
    
    return total;
  }

  setPinsDown(pinsDown: number){
    
    this.game[this.currentFrame].addBall(pinsDown);

    if(this.game[this.currentFrame].currentBall == this.game[this.currentFrame].numOfBalls){
        if(this.currentFrame != this.numOfFrames)
          this.currentFrame += 1;
    }    
  }

  private isValidFrame(frameNum: number): boolean {
    return (frameNum > this.numOfFrames);
  }

  private isValidBall(ballNum: number, frame: Frame): boolean {
    return (ballNum > frame.numOfBalls);
  }
}
