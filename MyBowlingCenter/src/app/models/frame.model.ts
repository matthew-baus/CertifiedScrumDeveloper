export class Frame{
    
    currentBall: number = 0;
    numOfBalls: number = 2;
    balls: Array<number> = new Array<number>();

    contructor(){
        this.balls = new Array<number>();
    }

    setNumberOfBalls(rolls: number) {
        this.numOfBalls = rolls; 
    }

    addBall(numOfPins: number) {
        
        
        console.log(`add ball: ${numOfPins}`);
        this.balls.push(numOfPins);
    }

    getTotal() : number {
        let total = 0;
        
        for(let ball : number = 0; ball < this.numOfBalls; ball++)
        {
            console.log(`Ball score: ${this.balls[ball]}`);
            total += this.balls[ball];
        }

        return total;
    }
}