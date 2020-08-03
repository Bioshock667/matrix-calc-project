class Calculator {
    constructor(){
        this._accum = undefined;
        this._second = undefined;
        this._operator = "";
    }
    get currentValue(){ return this._second;}
    set currentValue(value) {this._second = value;}
    get total(){ return this._accum;}
    set total(value) {this._accum = value;}
    scalarAdd(){
        this._accum += this._second;
    }
    scalarMinus(){
        this._accum -= this._second;
    }
    scalarMultiple(){
        this._accum *= this._second;
    }
    scalarDivide(){
        this._accum /= this._second;
    }
    addValue(value){
        if(this._accum === undefined)
            this._accum = new Number(value);
        else
            this._second = new Number(value);
    }
    addOperator(operator){
        this._operator = operator;
    }
    hasOperator(){return this._operator.length > 0;}
    calculate(){
        if(this._accum === undefined)
            return 0;
        else if(this._operator === "" || this._second == undefined)
            return this._accum;
        switch(this._operator){
            case "+":
            this.scalarAdd();
            break;
            case "-":
            this.scalarMinus();
            break;
            case "*":
            this.scalarMultiple();
            break;
            case "/":
            this.scalarDivide();
            break;
        }
        this.clearCurrent();
        return this._accum;
    }
    clearAll(){
        this._accum = undefined;
        this.clearCurrent();
    }
    clearCurrent(){
        this._operator = "";
        this._second = undefined;
    }
}
exports.mainCalc = new Calculator();