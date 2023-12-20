export default class Calculator  {
    constructor(previousOpText, currentOpText){
    this.previousOpText = previousOpText;
    this.currenOpText = currentOpText;
    this.clear();
    }

    clear(){
        this.previousOp = '';
        this.currentOp= '';
        this.operation = undefined;
    }

    delete(){}

    appendNumber(number){
        
    }

    choseOperation(operation){}

    compute(){}
    
    updateDisplay(){}

}