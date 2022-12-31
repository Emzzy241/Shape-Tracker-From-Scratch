// code for business Logic 

export default class Triangle {
  constructor(side1, side2, side3) {

    this.side1 = side1;
    // debugger;
    //     bola();
    this.side2 = side2;
    this.side3 = side3;
  }

  checkType = function () {
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
    // the way I did mine but there seems to be a bug there; read it well emmanuel
    // else if((this.side1 === this.side2) || (this.side2 === this.side3) && (this.side1 !== this.side3)){
    //   return "isoceles triangle";
    // }
    // the way Acedu did it and both of our ways worked
    // the conditional writtien below checks for isoceles and it also checks for equilateral too
    // we need to update this code to account for both without breaking the latter
    // else if((this.side1 === this.side2) || (this.side1 === this.side3) || (this.side2 === this.side3)){
    //   return "isoceles triangle";
    // }

    // updating isoceles code to account for both isoceles and equilateral
    // in updating the code of isoceles for equilateral, we know that our previous conditional for isoceles is also true for equilateral triangle, we update that condition to apply equilateral triangles instead. THen our else else statements will apply for isoceles triangles
    else if ((this.side1 === this.side2) && (this.side1 === this.side3)) {
      return "equilateral triangle";
    }
    else {
      return "isoceles triangle"
    }


  }

}