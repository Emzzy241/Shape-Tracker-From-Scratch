
// importing the Triangle object because we need it for our Triangle Tests
import Triangle from "../src/js/triangle.js";



// writing the Test now
describe("Trangle", () =>{
    
    // Test 1: should correctly create a Triangle with Three Lengths..... Don't forget that when writing tests we should start by testing the smallest possible behaviour in this case it makes sense to check if we can instantiate a Triangle object
    // This test only checks to see if our constructor works properly instantiates a triangle object with 3 properties(side1, side2, side3)
    test("should correctly create a Triangle with Three Lengths", ()=>{
        const triangle = new Triangle(2, 4, 5);
        expect(triangle.side1).toEqual(2);
        expect(triangle.side2).toEqual(4);
        expect(triangle.side3).toEqual(5);
    });
    // TEST 2: Should correctly determine Whether Three Lengths Are Not a Triangle
    // still inside the same describe

    test("should Correctly Determine Whether Three Lengths Are Not a Triangle", ()=>{
        const notTriangle = new Triangle(3, 9, 22);
        expect(notTriangle.checkType()).toEqual("not a triangle");
    });

    // TEST 3: Should determine Whether Three Lengths Make a Scalene Triangle

    test("Should determine Whether Three Lengths Make a Scalene Triangle", ()=>{
        const scalTriangle = new Triangle(4, 5, 7);
        expect(scalTriangle.checkType()).toEqual("scalene triangle");
    });

    // TEST 4: Should Determine Ehether Three Lengths Make An Isoceles Triangle
    // that means two lengths(but not all three) must be equal
    test("Should Determine Whether Three Lengths Make an Isoceles Triangle", ()=>{
        const isoTriangle = new Triangle(4, 4, 3);
        expect(isoTriangle.checkType()).toEqual("isoceles triangle")
    });

    // TEST 5: Determine whether Three Lengths Make An Equilateral Triangle
    // in equilateral triangles, all sides are equal
    test("Should Determine Whether Three engths Make an Equilateral Triangle", ()=>{
        const equiTriangle = new Triangle(5, 5, 5);
        expect(equiTriangle.checkType()).toEqual("equilateral triangle");
    });

});

