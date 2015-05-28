var romanNum = function(number) {

  var romanArray = [];

  while(number >= 1000) {
    number = number - 1000;
    romanArray.push("M");
  }

  while(number >= 500) {
    number = number - 500;
    romanArray.push("D")
  }

  while(number >= 100) {
    number = number - 100;
    romanArray.push("C");
  }

  while(number >= 50) {
    number = number - 50;
    romanArray.push("L");
  }

  while(number >= 10) {
    if (number === 9) {
      romanArray.push("IX");
      number = number - 9;
    }
    else {
      romanArray.push("X");
      number = number - 10;
    }
  }

  while(number >= 5) {
    if (number === 9) {
      romanArray.push("IX")
      number = number -9;
    }
    else if (number === 4) {
      romanArray.push("IV")
      number = number - 4;
    }
    else {
      romanArray.push("V");
      number = number - 5;
    }

  }

  while(number >= 1) {
    if (number === 4) {
      romanArray.push("IV");
      number = number - 4;
    }
    else {
      romanArray.push("I");
      number = number - 1;
    }
  }

  var romanString = romanArray.join();
  var newRomanString = romanString.replace( /,/g, "" );
  return newRomanString;
};
