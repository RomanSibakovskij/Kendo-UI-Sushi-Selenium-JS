const TestMethods = require('./utils/TestMethods');
const BaseTest = require('./utils/BaseTest');

describe('Checkout Page Tests', () => {
    let testMethods; //testMethods initializer
    let baseTest; //baseTest initializer

    beforeEach(async function () {
        baseTest = new BaseTest();  //BaseTest initialization
        await baseTest.beforeEach();  //beforeEach caller for setup (from BaseTest)
        testMethods = new TestMethods(baseTest.driver);  //driver passage to TestMethods
    });

    jest.setTimeout(180000) //timer for the whole single test run, otherwise throws a timeout error
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    describe("Single Product Checkout Test", () => {

        //Test 004 -> single product checkout test
        test("Single Product Checkout Test", async function () {
            //add single product to cart test
            await testMethods.addHomePageProductToCartTest();
            //single product checkout test
            await testMethods.checkoutProductOrderTest();
        });

    });

    describe("Product Checkout (Product Quantity Increase/Decrease During Checkout) Test", () => {

        //Test 004a -> product ('Shiromi') checkout (with product quantity increase) test
        test("Product Checkout (Product Quantity Increase) ('Shiromi') Test", async function () {
            //add single product page product ('Shiromi') to cart test
            await testMethods.addShiromiToCartTest();
            //product ('Shiromi') checkout (with product quantity increase) test
            await testMethods.checkoutIncreaseProductQuantityOrderTest();
        });

        //Test 004b-> multiple single product page products ('Hosomaki Mix') checkout (with product quantity decrease) test
        test("Multiple Single Product Page Products Checkout (Product Quantity Decrease) ('Hosomaki Mix') To Cart Test", async function () {
            //add multiple single product page products ('Hosomaki Mix') to cart test
            await testMethods.addMultipleHosomakiProductsToCartTest();
            //multiple single product page products ('Hosomaki Mix') checkout (with product quantity decrease) test
            await testMethods.checkoutDecreaseProductQuantityOrderTest();
        });

    });

    describe("Multiple Products Checkout Test", () => {

        //Test 004c -> product ('Seaweed salad', 'Maguro', 'Shake') checkout test
        test("Multiple Products Checkout ('Seaweed salad', 'Maguro', 'Shake') Test", async function () {
            //add multiple product page products ('Seaweed salad', 'Maguro', 'Shake') to cart test
            await testMethods.addMultipleHomePageProductsToCartTest();
            //multiple products ('Seaweed salad', 'Maguro', 'Shake') checkout test
            await testMethods.checkoutProductOrderTest();
        });

    });

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //driver clean-up after each test run
    afterEach(async function() {
        await baseTest.afterEach();  //afterEach caller for cleanup (from BaseTest)
    });

});


