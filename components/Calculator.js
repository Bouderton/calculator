export default class Calculator  {
    constructor(previousOpText, currentOpText){
    this.previousOpText = previousOpText;
    this.currentOpText = currentOpText;
    this.clear();
    }

    clear(){
        this.previousOpText = '';
        this.currentOpText= '';
        this.operation = undefined;
    }

    delete(){}

    appendNumber(number){
       this.currentOpText = number;
    }

    choseOperation(operation){}

    compute(){}
    
    updateDisplay(){
        this.currentOpText.innerText = this.currentOpText
    }

}