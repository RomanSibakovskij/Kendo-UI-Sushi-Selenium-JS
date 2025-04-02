const TestMethods = require('./utils/TestMethods');
const BaseTest = require('./utils/BaseTest');

describe('Home Page Tests', () => {
    let testMethods; //testMethods initializer
    let baseTest; //baseTest initializer

    beforeEach(async function () {
        baseTest = new BaseTest();  //BaseTest initialization
        await baseTest.beforeEach();  //beforeEach caller for setup (from BaseTest)
        testMethods = new TestMethods(baseTest.driver);  //driver passage to TestMethods
    });

    jest.setTimeout(45000) //timer for the whole single test run, otherwise throws a timeout error
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    describe("Add Single Product To Cart Test", () => {

        //Test 001 -> add single product ('Sashimi salad') to cart test
        test("Add Single Product To Cart Test", async function () {
            await testMethods.addHomePageProductToCartTest();
        });

    });

    describe("Add Multiple Products To Cart Test", () => {

        //Test 001a -> add multiple products ('Seaweed salad', 'Maguro', 'Shake') to cart test
        test("Add Multiple Products ('Seaweed salad', 'Maguro', 'Shake') To Cart Test", async function () {
            await testMethods.addMultipleHomePageProductsToCartTest();
        });

    });

    describe("Remove Single Product From Cart Test", () => {

        //Test 001b -> remove single product from cart test
        test("Remove Single Product From Cart Test", async function () {
            await testMethods.removeHomePageProductFromCartTest();
        });

    });

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //driver clean-up after each test run
    afterEach(async function() {
        await baseTest.afterEach();  //afterEach caller for cleanup (from BaseTest)
    });

});


