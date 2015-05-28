var romanNum = function(number) {

  var romanArray = [];

  while(number >= 100) {
    number = number - 100;
    romanArray.push("C");
  }

  while(number >= 50) {
    number = number - 50;
    romanArray.push("L");
  }

  while(number >= 10) {
    number = number - 10;
    romanArray.push("X");
  }

  while(number >= 5) {
    number = number -5;
    romanArray.push("V");
  }

  while(number >= 1) {
    number = number -1;
    romanArray.push("I");
  }

  var romanString = romanArray.join();
  var newRomanString = romanString.replace( /,/g, "" );
  return newRomanString;
};
