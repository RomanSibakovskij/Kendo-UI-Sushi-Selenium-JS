const TestMethods = require('./utils/TestMethods');
const BaseTest = require('./utils/BaseTest');

describe('Single Product Page Tests', () => {
    let testMethods; //testMethods initializer
    let baseTest; //baseTest initializer

    beforeEach(async function () {
        baseTest = new BaseTest();  //BaseTest initialization
        await baseTest.beforeEach();  //beforeEach caller for setup (from BaseTest)
        testMethods = new TestMethods(baseTest.driver);  //driver passage to TestMethods
    });

    jest.setTimeout(160000) //timer for the whole single test run, otherwise throws a timeout error
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    describe("Add Single Product Page Product To Cart Test", () => {

        //Test 002 -> add single product page product ('Shiromi') to cart test
        test("Add Single Product Page Product ('Shiromi') To Cart Test", async function () {
            await testMethods.addShiromiToCartTest();
        });

    });

    describe("Add Multiple Single Product Page Products To Cart Test", () => {

        //Test 002a-> add multiple single product page products ('Hosomaki Mix') to cart test
        test("Add Multiple Single Product Page Products ('Hosomaki Mix') To Cart Test", async function () {
            await testMethods.addMultipleHosomakiProductsToCartTest();
        });

    });

    describe("Remove Single Product Page Product From Cart Test", () => {

        //Test 002b -> remove single product page product ('Seattle Rolls') from cart test
        test("Remove Single Product Page Product ('Seattle Rolls') From Cart Test", async function () {
            await testMethods.removeSeattleRollsFromCartTest();
        });

    });

    describe("Scroll Up/Down Through Single Product Pages Tests", () => {

        //Test 003 -> scroll up through single product pages test
        test("Scroll Up Through Single Product Pages Test", async function () {
            await testMethods.scrollUpThroughSingleProductPagesTest();
        });

        //Test 003a -> scroll down through single product pages test
        test("Scroll Down Through Single Product Pages Test", async function () {
            await testMethods.scrollDownThroughSingleProductPagesTest();
        });

    });


    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //driver clean-up after each test run
    afterEach(async function() {
        await baseTest.afterEach();  //afterEach caller for cleanup (from BaseTest)
    });

});