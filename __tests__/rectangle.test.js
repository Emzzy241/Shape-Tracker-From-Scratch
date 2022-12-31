// since I used an export default on my Rectangle Class its only that object it will export for me
// so there is no need to use curly braces that indicate I want to import more than one thing
import Rectangle from "./../src/js/rectangle.js";

// written the first test before the actual code, got a bad fail of rectangle not being a constructor.... Lets go and write minimum code now to at least geta good fail
// having written minimum code to get a good fail, we now get a good fail... in our good fail: we expected 3 and received: undefined.... We know thats a good fail, we can now procede to writing all our source code to get our Test passing
// after getting ourselves a good fail, we add enough source codes to get our tests passing now in our rectangle.js file

describe("Rectangle", () =>{
    // test("should correcly create a rectangle object using two sides", () =>{
    //     const rectangle = new Rectangle(3, 5);
    //     expect(rectangle.side1).toEqual(3);
    //     expect(rectangle.side2).toEqual(5);
    // });

    // // again for our TDD workflow, we wrote our tests first even before writing the getArea() method... We got a bad fail, lets agan write the minimum code to get ourselves a good fail
    // // now that we have a good fail, lets get our tests passing
    // // don't forget, a good fail is when you get the expected and received value... After we've gotten that we then write our source code to get our tests passing
    // test("should cprrectly create a rectangle object using twwo sides", () =>{
    //     const rectangle = new Rectangle(3, 5);
    //     expect(rectangle.getArea()).toEqual(15);
    // });
    // now all our tests are passing(both the one here and the one in the triangle.test.js file)

    // assuming we built out our source code and added more tests, we can make our code dry
    // making all our tests dry now by making use of a beforeEach() block

    let myRectangle;

    beforeEach(() =>{
        // reusing the values in our variable in other tests and by doing that we make our code DRY
        myRectangle = new Rectangle(3, 5);

    });

    // now we don;t have to keep reinstantiating our Rectangle object everytime for our tests, we can always reuse those values

        test("should correcly create a rectangle object using two sides", () =>{const rectangle = new Rectangle(3, 5);
        expect(myRectangle.side1).toEqual(3);
        expect(myRectangle.side2).toEqual(5);
    });

    // now 
     test("should cprrectly create a rectangle object using twwo sides", () =>{
        expect(myRectangle.getArea()).toEqual(15);
    });



})
