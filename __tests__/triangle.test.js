
// importing the Triangle object because we need it for our Triangle Tests
import Triangle from "./../src/triangle.js";



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
    })

});

