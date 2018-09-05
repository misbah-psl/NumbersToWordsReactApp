import React from 'react';
import ReactDOM from 'react-dom';

/**
* array of words
*/
export const words = [
    "",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
    "twenty"
];
words[30] = "thirty";
words[40] = "forty";
words[50] = "fifty";
words[60] = "sixty";
words[70] = "seventy";
words[80] = "eighty";
words[90] = "ninety";

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            wordStr: "",
        }
        this.validateAndConvert = this.validateAndConvert.bind(this);
    };

    /*
     * Validates, converts numbers to words and updates the state
     */
    validateAndConvert(e) {
        e.preventDefault();
        var result = "";

        var num    = this.numInput.value;
        num        = num.split(",").join("");

        var isValid = this.numberValidator(num);

        if (isValid) {
            num     = parseInt(num);
            result  = this.convert(num);
        } else {
            result  = "Incorrect value";
        }

        this.setState({
            wordStr: result
        });
    };

   /*
    * convert number to word 
    */
    convert(num) {

        var wordStr = "";
        var r = "";
        if (num < 21) {
            wordStr += words[num];
        } else if (num < 100) {
            // get ten's place
            wordStr += words[10 * Math.floor(num / 10)];
            // get one's place
            r = num % 10;
            if (r > 0) {
                wordStr += ' ' + words[r];
            }
        } else if (num < 1000) {
            // get 100th place
            wordStr += words[Math.floor(num / 100)] + ' hundred';
            r = num % 100;
            if (r > 0) {
                // get ten's and one's place
                wordStr += ' and ' + this.convert(r);
            }
        } else if (num < 1000000) {
            // get thousand's place
            wordStr += this.convert(Math.floor(num / 1000)) + ' thousand';
            r = num % 1000;
            if (r > 0) {
                wordStr += ', ';
                if (r < 100) {
                    wordStr += ' ';
                }
                wordStr += this.convert(r);
            }
        } else {
            wordStr += this.convert(Math.floor(num / 1000000)) + ' million';
            r = num % 1000000;
            if (r > 0) {
                wordStr += ', ';
                if (r < 100) {
                    word += ' ';
                }
                wordStr += this.convert(r);
            }
        }
        return wordStr;
    };

    /*
     * validate input 
     */
    numberValidator(num) {
        if (isNaN(num) || num < 0) {
            return false;
        }
        return true;
    };

    render() {
        return ( 
            <div>
              <form onSubmit = {this.validateAndConvert} >
                <label> Enter a Number: </label> <input type = "text" name = "num" ref = { (numInput) => {this.numInput = numInput} } /> 
                <br/>
                <br/>
                <input type = "submit" value = "Conver Number to Words" name = "convert" / >
              </form>
              <p>{ this.state.wordStr !== "" ? "You have entered:" : "" }</p>
              <label>{ this.state.wordStr }</label> 
          </div>
        );
    };
}