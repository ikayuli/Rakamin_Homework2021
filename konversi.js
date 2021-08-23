class Convert {
    constructor() {
        console.log("this is new object");
    }
    
    fromCelcius(to, number) {
        if (to == "celcius") {
            return number;
        }
        if (to == "reamur") {
            return (4 / 5) * number;
        }
        if (to == "farenheit") {
            return (9 / 5) * number + 32;
        }
    }

    fromFarenheit(to, number) {
        if (to == "farenheit") {
          return number;
        }
        if (to == "celcius") {
          return (5 / 9) * (number - 32);
        }
        if (to == "reamur") {
          return (4 / 9) * (number - 32);
        }
      }


      fromReamur(to, number) {
        if (to == "reamur") {
            return number;
          }
          if (to == "celcius") {
            return (5 / 4) * number;
          }
          if (to == "farenheit") {
            return (9 / 4) * number + 32;
        }
      }
    }
    
    module.exports = Convert;