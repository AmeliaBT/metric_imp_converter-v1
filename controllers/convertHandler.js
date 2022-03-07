let numQty = require("numeric-quantity");

function ConvertHandler() {
  this.getNum = function(input) {
    var result;   
    let firstLetter = new RegExp(/[a-z]/i);
    let firstL = input.match(firstLetter); 
    let firstLindex = input.indexOf(firstL);     
    let inSplited = input.slice(0, firstLindex);   
    let myRegex1 = /[+-]?(?:\d*[.,/])?\d+/;
    let resultA = input.match(myRegex1);
    if (resultA === null) {     
      result = 1;    
    } else {  
     let keep= numQty(inSplited);
       if (isNaN(numQty(inSplited)) ){      
        result = "invalid number";}else{
          result = numQty(inSplited);        
       };     
         }    
    return result;
  };

  this.getUnit = function(input) {
    var result;   
    let myRegex2 = /[a-z]/gi;
    result = input.match(myRegex2).join(""); //.toString();  
    return result;  };

  this.getReturnUnit = function(initUnit) {
    var result;    
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    switch (initUnit) {
      case "gal":
        return "L";
        break;
      case "lbs":
        return "kg";
        break;
      case "mi":
        return "km";
        break;
      case "L":
        return "gal";
        break;
      case "kg":
        return "lbs";
        break;
      case "km":
        return "mi";
        break;
      default:
        return "invalid unit";
    }
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    switch (unit) {
      case "gal":
        return "gallons";
        break;
      case "lbs":
        return "pounds";
        break;
      case "mi":
        return "miles";
        break;
      case "L":
        return "liters";
        break;
      case "kg":
        return "kilograms";
        break;
      case "km":
        return "kilometers";
        break;
      default:
        return "invalid unit";
    }
    return result;
  };

  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;   
    switch (initUnit) {
      case "gal":
        result = initNum * galToL;
        break;
      case "lbs":
        result = initNum * lbsToKg;
        break;
      case "mi":
        result = initNum * miToKm;
        break;
      case "L":
        result = initNum / galToL;
        break;
      case "kg":
        result = initNum / lbsToKg;
        break;
      case "km":
        result = initNum / miToKm;
        break;
      default:
        return (result = 1);
    }
    return result;
  }; 
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result; 
    result =
      initNum +      " " +      this.spellOutUnit(initUnit) +  " converts to " +  returnNum.toPrecision(5) +  " " +      this.spellOutUnit(returnUnit);
  
    return result;
  };
}

module.exports = ConvertHandler;
