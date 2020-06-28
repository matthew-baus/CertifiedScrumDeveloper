export class Frame{
    
    currentBall: number = 1;
    numOfBalls: number = 2;
    balls: Array<number>;

    contructor(){
        this.balls = new Array<number>();
    }

    setNumberOfBalls(rolls: number) {
        this.numOfBalls = rolls; 
    }

    addBall(numOfPins: number) {
        
        if(this.balls.length == this.numOfBalls){
            this.currentBall = 1;
            return;
        }

        this.balls.push(numOfPins);
    }

    getTotal() : number {
        let total = 0;
        
        this.balls.forEach(element => {
            total += element;
        });

        return total;
    }
}