
// importing the Triangle object because we need it for our Triangle Tests
import Triangle from "./../src/triangle.js";


// Test 1: should correctly create a Triangle with Three Lengths

// writing the Test now
describe("Trangle", () =>{
    test("should correctly create a Triangle with Three Lengths", ()=>{
        const triangle = new Triangle(2, 4, 5);
        expect(triangle.side1).toEqual(2);
        expect(triangle.side2).toEqual(4);
        expect(triangle.side3).toEqual(5);
    });
});