
//Opposite number
// Very simple, given a number (integer / decimal / both depending on the language), find its opposite (additive inverse).

// Examples:

// 1: -1
// 14: -14
// -34: 34

function opposite(number) {
    //your code here
    if(number==0){
       return number;
    }
    else{
      return -1*number;
    }
  }
  console.log(opposite(1));//-1
  console.log(opposite(14));//-14
  console.log(opposite(-34));//34
  console.log(opposite(0));//0