export class Frame{
    numOfRolls: number = 2;
    rolls: number[];

    setNumberOfRolls(rolls: number) {
        this.numOfRolls = rolls; 
    }

    addRoll(numOfPins: number) {
        if(this.rolls.length == this.numOfRolls)
        return;

        this.rolls.push(numOfPins);
    }

    getTotal() : number {
        let total = 0;
        
        this.rolls.forEach(element => {
            total += element;
        });

        return total;
    }
}