import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <input #newScore
      (keyup.enter)="addBall(newScore.value)"
      (blur)="addBall(newScore.value); newScore.value='' ">

    <button (click)="addBall(newScore.value)">Pins Down</button><br><br>

    <table><tr><td *ngFor="let score of scores">{{score}}</td></tr></table>
  `
})
export class AppComponent {
  title = 'MyBowlingCenter';

  scores = [];
  addBall(newScore: Number) {
    if (newScore) {
      this.scores.push(newScore);
    }
  }
}
