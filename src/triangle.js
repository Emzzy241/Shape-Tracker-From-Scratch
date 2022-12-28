// code for business Logic 

export default function Triangle(side1, side2, side3) {
  this.side1 = side1;
  // debugger;
  //     bola();
  this.side2 = side2;
  this.side3 = side3;
}

Triangle.prototype.checkType = function () {
  // tests to determine scalene triangle already written and got a good fail, now its time to update source code to account for this
  // conditional that determines whether its a scalene trianlgle or not
  // this code checks to see if all three sides are different.... If they are, our method will return "scalene triangle"
  // if((this.side1 !== this.side2) && (this.side2 !== this.side3) && (this.side2 !== this.side3)){
  //   return "scalene triangle";
  // }
  // else{
  //   return "not a triangle";
  // }

  // the if statement above works for our 1st and 3rd test but breaks the 2nd one, to avoid this now we refactor our code and add a conditional that actually checks whether the value of one side is greater than the sum of the other two sides
  if ((this.side1 > (this.side2 + this.side3)) || (this.side2 > (this.side1 + this.side3)) || (this.side3 > (this.side1 + this.side2))) {
    return "not a triangle";
  }
  else if ((this.side1 !== this.side2) && (this.side1 !== this.side3) && (this.side2 !== this.side3)) {
    return "scalene triangle";
  }
  // adding another conditional to make the 4th Test(isoceles Trianlgle) pass
  // the way I did mine
  // else if((this.side1 === this.side2) || (this.side2 === this.side3) && (this.side1 !== this.side3)){
  //   return "isoceles triangle";
  // }
  // the way Acedu did it and both of our ways worked
  else if((this.side1 === this.side2) || (this.side2 === this.side3) || (this.side2 === this.side3)){
    return "isoceles triangle";
  }


}