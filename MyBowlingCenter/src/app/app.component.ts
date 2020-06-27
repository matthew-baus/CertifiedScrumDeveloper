import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.sass"]
})
export class AppComponent {
  counter = 0;
  total = 0;
  score = 0;

  increment(): void {
    this.counter++;
  }

  decrement(): void {
    this.counter--;
  }

  enter(score): void {
    this.score = score;
    this.total += this.score;
  }
}