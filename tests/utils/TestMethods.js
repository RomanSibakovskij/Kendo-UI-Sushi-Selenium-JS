"use strict";
const fs = require('fs');
const path = require('path');
const assert = require("node:assert");
const Logger = require('../../pages/utils/Logger');
const { HomePage } = require('../../pages/HomePage');
const { GeneralPage } = require("../../pages/GeneralPage");
const { SingleProductPage } = require("../../pages/SingleProductPage");
const { CheckoutPage } = require("../../pages/CheckoutPage");

class TestMethods{

    constructor(driver) {this.driver = driver;}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //add home page product to cart test method
    async addHomePageProductToCartTest(){
        const generalPage = new GeneralPage(this.driver);
        const homePage = new HomePage(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //home page web element assert
        await homePage.isHomePageWebElementDisplayed();
        //capture screenshot of the home page display
        await TestMethods.captureScreenshot(this.driver, "Home Page Display");
        //log home page product data
        await this.logHomePageProductData();
        //click 'Sashimi salad' add to cart button
        await homePage.clickProductAddToCartButton(0);
        //shop cart info web element assert
        await homePage.isShopCartInfoWebElementDisplayed();
        //shop cart info text element assert
        await this.isShopCartInfoTextElementAsExpected();
        //log shopping cart info data
        await this.logShopCartInfoProductData();
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Add Sashimi Salad To Shopping Cart Test Result");
    }

    //add multiple home page products ('Seaweed salad', 'Maguro', 'Shake') to cart test method
    async addMultipleHomePageProductsToCartTest(){
        const generalPage = new GeneralPage(this.driver);
        const homePage = new HomePage(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //home page web element assert
        await homePage.isHomePageWebElementDisplayed();
        //capture screenshot of the home page display
        await TestMethods.captureScreenshot(this.driver, "Home Page Display");
        //log home page product data
        await this.logHomePageProductData();
        //click 'Seaweed salad' add to cart button
        await homePage.clickProductAddToCartButton(2);
        //click 'Maguro' add to cart button
        await homePage.clickProductAddToCartButton(5);
        //click 'Shake' add to cart button
        await homePage.clickProductAddToCartButton(6);
        //shop cart info web element assert
        await homePage.isShopCartInfoWebElementDisplayed();
        //shop cart info text element assert
        await this.isShopCartInfoTextElementAsExpected();
        //log shopping cart info data
        await this.logShopCartInfoProductData();
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Add Multiple Products To Shopping Cart Test Result");
    }

    //remove home page product from cart test method
    async removeHomePageProductFromCartTest(){
        const generalPage = new GeneralPage(this.driver);
        const homePage = new HomePage(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //home page web element assert
        await homePage.isHomePageWebElementDisplayed();
        //capture screenshot of the home page display
        await TestMethods.captureScreenshot(this.driver, "Home Page Display");
        //log home page product data
        await this.logHomePageProductData();
        //click 'Sashimi salad' add to cart button
        await homePage.clickProductAddToCartButton(8);
        //shop cart info web element assert
        await homePage.isShopCartInfoWebElementDisplayed();
        //shop cart info text element assert
        await this.isShopCartInfoTextElementAsExpected();
        //log shopping cart info data
        await this.logShopCartInfoProductData();
        //capture screenshot of the product addition
        await TestMethods.captureScreenshot(this.driver, "Add Tekka Maki To Shopping Cart Display");
        //click 'Remove product' link
        await homePage.clickRemoveProductLink(0);
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Remove Tekka Maki From Shopping Cart Test Result");
    }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //add single product page product ('Shiromi') to cart test
    async addShiromiToCartTest(){
        const generalPage = new GeneralPage(this.driver);
        const homePage = new HomePage(this.driver);
        const singleProductPage = new SingleProductPage(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //home page web element assert
        await homePage.isHomePageWebElementDisplayed();
        //capture screenshot of the home page display
        await TestMethods.captureScreenshot(this.driver, "Home Page Display");
        //log home page product data
        await this.logHomePageProductData();
        //click 'Shiromi' product name link
        await homePage.clickProductNameLink(7);
        //capture screenshot of the single product page display
        await TestMethods.captureScreenshot(this.driver, "Single Product Page ('Shiromi') Display");
        //single product page web element assert
        await singleProductPage.isSingleProductPageWebElementDisplayed();
        //single product page text element assert
        await this.isSingleProductPageTextElementAsExpected();
        //log single product page product data
        await this.logSingleProductPageProductData();
        //click 'Add to cart' button
        await singleProductPage.clickAddToCartButton();
        //shop cart info web element assert
        await homePage.isShopCartInfoWebElementDisplayed();
        //shop cart info text element assert
        await this.isShopCartInfoTextElementAsExpected();
        //log shopping cart info data
        await this.logShopCartInfoProductData();
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Single Product Page Product ('Shiromi') Addition to Cart Test Result");
    }

    //add multiple single product page products ('Hosomaki Mix') to cart test
    async addMultipleHosomakiProductsToCartTest(){
        const generalPage = new GeneralPage(this.driver);
        const homePage = new HomePage(this.driver);
        const singleProductPage = new SingleProductPage(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //home page web element assert
        await homePage.isHomePageWebElementDisplayed();
        //capture screenshot of the home page display
        await TestMethods.captureScreenshot(this.driver, "Home Page Display");
        //log home page product data
        await this.logHomePageProductData();
        //click 'Hosomaki Mix' product name link
        await homePage.clickProductNameLink(9);
        //capture screenshot of the single product page display
        await TestMethods.captureScreenshot(this.driver, "Single Product Page ('Hosomaki Mix') Display");
        //single product page web element assert
        await singleProductPage.isSingleProductPageWebElementDisplayed();
        //single product page text element assert
        await this.isSingleProductPageTextElementAsExpected();
        //log single product page product data
        await this.logSingleProductPageProductData();
        //click 'Add to cart' button (three times to add three products)
        await singleProductPage.clickAddToCartButton();
        await singleProductPage.clickAddToCartButton();
        await singleProductPage.clickAddToCartButton();
        //shop cart info web element assert
        await homePage.isShopCartInfoWebElementDisplayed();
        //shop cart info text element assert
        await this.isShopCartInfoTextElementAsExpected();
        //log shopping cart info data
        await this.logShopCartInfoProductData();
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Single Product Page Product ('Hosomaki Mix') Addition to Cart Test Result");
    }

    //remove single product page product ('Seattle Rolls') from cart test
    async removeSeattleRollsFromCartTest(){
        const generalPage = new GeneralPage(this.driver);
        const homePage = new HomePage(this.driver);
        const singleProductPage = new SingleProductPage(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //home page web element assert
        await homePage.isHomePageWebElementDisplayed();
        //capture screenshot of the home page display
        await TestMethods.captureScreenshot(this.driver, "Home Page Display");
        //log home page product data
        await this.logHomePageProductData();
        //click 'Seattle Rolls' product name link
        await homePage.clickProductNameLink(11);
        //capture screenshot of the single product page display
        await TestMethods.captureScreenshot(this.driver, "Single Product Page ('Seattle Rolls') Display");
        //single product page web element assert
        await singleProductPage.isSingleProductPageWebElementDisplayed();
        //single product page text element assert
        await this.isSingleProductPageTextElementAsExpected();
        //log single product page product data
        await this.logSingleProductPageProductData();
        //click 'Add to cart' button
        await singleProductPage.clickAddToCartButton();
        //shop cart info web element assert
        await homePage.isShopCartInfoWebElementDisplayed();
        //shop cart info text element assert
        await this.isShopCartInfoTextElementAsExpected();
        //log shopping cart info data
        await this.logShopCartInfoProductData();
        //capture screenshot of the product addition to cart before removal
        await TestMethods.captureScreenshot(this.driver, "Single Product Page ('Seattle Rolls') Addition To Cart");
        //click 'Empty cart' link
        await homePage.clickEmptyCartLink();
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Single Product Page Product ('Seattle Rolls') Removal From Cart Test Result");
    }

    //single product page scroll up/down tests

    //single product page scroll up test method
    async scrollUpThroughSingleProductPagesTest(){
        const generalPage = new GeneralPage(this.driver);
        const homePage = new HomePage(this.driver);
        const singleProductPage = new SingleProductPage(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //home page web element assert
        await homePage.isHomePageWebElementDisplayed();
        //capture screenshot of the home page display
        await TestMethods.captureScreenshot(this.driver, "Home Page Display");
        //log home page product data
        await this.logHomePageProductData();
        //click first product name link
        await homePage.clickProductNameLink(0);
        //capture screenshot of the single product page display
        await TestMethods.captureScreenshot(this.driver, "First = Single Product Page ('Sashimi Salad') Display");
        //single product page web element assert
        await singleProductPage.isSingleProductPageWebElementDisplayed();
        //single product page text element assert
        await this.isSingleProductPageTextElementAsExpected();
        //log single product page product data
        await this.logSingleProductPageProductData();
        //click 'Scroll-up' link
        await singleProductPage.clickNextProductLink();
        //capture screenshot of the single product page display
        await TestMethods.captureScreenshot(this.driver, "Current = Single Product Page ('Chirashi Sushi') Display");
        //single product page web element assert
        await singleProductPage.isSingleProductPageWebElementDisplayed();
        //single product page text element assert
        await this.isSingleProductPageTextElementAsExpected();
        //log single product page product data
        await this.logSingleProductPageProductData();
        //click 'Scroll-up' link
        await singleProductPage.clickNextProductLink();
        //capture screenshot of the single product page display
        await TestMethods.captureScreenshot(this.driver, "Current = Single Product Page ('Seaweed Salad') Display");
        //single product page web element assert
        await singleProductPage.isSingleProductPageWebElementDisplayed();
        //single product page text element assert
        await this.isSingleProductPageTextElementAsExpected();
        //log single product page product data
        await this.logSingleProductPageProductData();
        //click 'Scroll-up' link
        await singleProductPage.clickNextProductLink();
        //capture screenshot of the single product page display
        await TestMethods.captureScreenshot(this.driver, "Current = Single Product Page ('Edamame') Display");
        //single product page web element assert
        await singleProductPage.isSingleProductPageWebElementDisplayed();
        //single product page text element assert
        await this.isSingleProductPageTextElementAsExpected();
        //log single product page product data
        await this.logSingleProductPageProductData();
        //click 'Scroll-up' link
        await singleProductPage.clickNextProductLink();
        //capture screenshot of the single product page display
        await TestMethods.captureScreenshot(this.driver, "Current = Single Product Page ('Miso Soup') Display");
        //single product page web element assert
        await singleProductPage.isSingleProductPageWebElementDisplayed();
        //single product page text element assert
        await this.isSingleProductPageTextElementAsExpected();
        //log single product page product data
        await this.logSingleProductPageProductData();
        //click 'Scroll-up' link
        await singleProductPage.clickNextProductLink();
        //capture screenshot of the single product page display
        await TestMethods.captureScreenshot(this.driver, "Current = Single Product Page ('Maguro') Display");
        //single product page web element assert
        await singleProductPage.isSingleProductPageWebElementDisplayed();
        //single product page text element assert
        await this.isSingleProductPageTextElementAsExpected();
        //log single product page product data
        await this.logSingleProductPageProductData();
        //click 'Scroll-up' link
        await singleProductPage.clickNextProductLink();
        //capture screenshot of the single product page display
        await TestMethods.captureScreenshot(this.driver, "Current = Single Product Page ('Shake') Display");
        //single product page web element assert
        await singleProductPage.isSingleProductPageWebElementDisplayed();
        //single product page text element assert
        await this.isSingleProductPageTextElementAsExpected();
        //log single product page product data
        await this.logSingleProductPageProductData();
        //click 'Scroll-up' link
        await singleProductPage.clickNextProductLink();
        //capture screenshot of the single product page display
        await TestMethods.captureScreenshot(this.driver, "Current = Single Product Page ('Shiromi') Display");
        //single product page web element assert
        await singleProductPage.isSingleProductPageWebElementDisplayed();
        //single product page text element assert
        await this.isSingleProductPageTextElementAsExpected();
        //log single product page product data
        await this.logSingleProductPageProductData();
        //click 'Scroll-up' link
        await singleProductPage.clickNextProductLink();
        //capture screenshot of the single product page display
        await TestMethods.captureScreenshot(this.driver, "Current = Single Product Page ('Tekka maki') Display");
        //single product page web element assert
        await singleProductPage.isSingleProductPageWebElementDisplayed();
        //single product page text element assert
        await this.isSingleProductPageTextElementAsExpected();
        //log single product page product data
        await this.logSingleProductPageProductData();
        //click 'Scroll-up' link
        await singleProductPage.clickNextProductLink();
        //capture screenshot of the single product page display
        await TestMethods.captureScreenshot(this.driver, "Current = Single Product Page ('Hosomaki mix') Display");
        //single product page web element assert
        await singleProductPage.isSingleProductPageWebElementDisplayed();
        //single product page text element assert
        await this.isSingleProductPageTextElementAsExpected();
        //log single product page product data
        await this.logSingleProductPageProductData();
        //click 'Scroll-up' link
        await singleProductPage.clickNextProductLink();
        //capture screenshot of the single product page display
        await TestMethods.captureScreenshot(this.driver, "Current = Single Product Page ('California rolls') Display");
        //single product page web element assert
        await singleProductPage.isSingleProductPageWebElementDisplayed();
        //single product page text element assert
        await this.isSingleProductPageTextElementAsExpected();
        //log single product page product data
        await this.logSingleProductPageProductData();
        //click 'Scroll-up' link
        await singleProductPage.clickNextProductLink();
        //capture screenshot of the single product page display
        await TestMethods.captureScreenshot(this.driver, "Current = Single Product Page ('Seattle rolls') Display");
        //single product page web element assert
        await singleProductPage.isSingleProductPageWebElementDisplayed();
        //single product page text element assert
        await this.isSingleProductPageTextElementAsExpected();
        //log single product page product data
        await this.logSingleProductPageProductData();
        //click 'Scroll-up' link
        await singleProductPage.clickNextProductLink();
        //capture screenshot of the single product page display
        await TestMethods.captureScreenshot(this.driver, "Current = Single Product Page ('Spicy Tuna rolls') Display");
        //single product page web element assert
        await singleProductPage.isSingleProductPageWebElementDisplayed();
        //single product page text element assert
        await this.isSingleProductPageTextElementAsExpected();
        //log single product page product data
        await this.logSingleProductPageProductData();
        //click 'Scroll-up' link
        await singleProductPage.clickNextProductLink();
        //capture screenshot of the single product page display
        await TestMethods.captureScreenshot(this.driver, "Current = Single Product Page ('Ebi rolls') Display");
        //single product page web element assert
        await singleProductPage.isSingleProductPageWebElementDisplayed();
        //single product page text element assert
        await this.isSingleProductPageTextElementAsExpected();
        //log single product page product data
        await this.logSingleProductPageProductData();
        //click 'Scroll-up' link
        await singleProductPage.clickNextProductLink();
        //capture screenshot of the single product page display
        await TestMethods.captureScreenshot(this.driver, "Current = Single Product Page ('Chicken Teriyaki') Display");
        //single product page web element assert
        await singleProductPage.isSingleProductPageWebElementDisplayed();
        //single product page text element assert
        await this.isSingleProductPageTextElementAsExpected();
        //log single product page product data
        await this.logSingleProductPageProductData();
        //click 'Scroll-up' link
        await singleProductPage.clickNextProductLink();
        //capture screenshot of the single product page display
        await TestMethods.captureScreenshot(this.driver, "Current = Single Product Page ('Salmon Teriyaki') Display");
        //single product page web element assert
        await singleProductPage.isSingleProductPageWebElementDisplayed();
        //single product page text element assert
        await this.isSingleProductPageTextElementAsExpected();
        //log single product page product data
        await this.logSingleProductPageProductData();
        //click 'Scroll-up' link
        await singleProductPage.clickNextProductLink();
        //capture screenshot of the single product page display
        await TestMethods.captureScreenshot(this.driver, "Current = Single Product Page ('Gohan') Display");
        //single product page web element assert
        await singleProductPage.isSingleProductPageWebElementDisplayed();
        //single product page text element assert
        await this.isSingleProductPageTextElementAsExpected();
        //log single product page product data
        await this.logSingleProductPageProductData();
        //click 'Scroll-up' link
        await singleProductPage.clickNextProductLink();
        //capture screenshot of the single product page display
        await TestMethods.captureScreenshot(this.driver, "Current = Single Product Page ('Tori Katsu') Display");
        //single product page web element assert
        await singleProductPage.isSingleProductPageWebElementDisplayed();
        //single product page text element assert
        await this.isSingleProductPageTextElementAsExpected();
        //log single product page product data
        await this.logSingleProductPageProductData();
        //click 'Scroll-up' link
        await singleProductPage.clickNextProductLink();
        //capture screenshot of the single product page display
        await TestMethods.captureScreenshot(this.driver, "Last = Single Product Page ('Yaki Udon') Display");
        //single product page web element assert
        await singleProductPage.isSingleProductPageWebElementDisplayed();
        //single product page text element assert
        await this.isSingleProductPageTextElementAsExpected();
        //log single product page product data
        await this.logSingleProductPageProductData();
        //capture screenshot of the single product page display
        await TestMethods.captureScreenshot(this.driver, "Scroll Up Through Single Product Pages Test Result");
    }

    //single product page scroll down test method
    async scrollDownThroughSingleProductPagesTest(){
        const generalPage = new GeneralPage(this.driver);
        const homePage = new HomePage(this.driver);
        const singleProductPage = new SingleProductPage(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //home page web element assert
        await homePage.isHomePageWebElementDisplayed();
        //capture screenshot of the home page display
        await TestMethods.captureScreenshot(this.driver, "Home Page Display");
        //log home page product data
        await this.logHomePageProductData();
        //click last product name link
        await homePage.clickProductNameLink(18);
        //capture screenshot of the single product page display
        await TestMethods.captureScreenshot(this.driver, "Last = Single Product Page ('Yaki Udon') Display");
        //single product page web element assert
        await singleProductPage.isSingleProductPageWebElementDisplayed();
        //single product page text element assert
        await this.isSingleProductPageTextElementAsExpected();
        //log single product page product data
        await this.logSingleProductPageProductData();
        //click 'Scroll-down' link
        await singleProductPage.clickPreviousProductLink();
        //capture screenshot of the single product page display
        await TestMethods.captureScreenshot(this.driver, "Current = Single Product Page ('Tori Katsu') Display");
        //single product page web element assert
        await singleProductPage.isSingleProductPageWebElementDisplayed();
        //single product page text element assert
        await this.isSingleProductPageTextElementAsExpected();
        //log single product page product data
        await this.logSingleProductPageProductData();
        //click 'Scroll-down' link
        await singleProductPage.clickPreviousProductLink();
        //capture screenshot of the single product page display
        await TestMethods.captureScreenshot(this.driver, "Current = Single Product Page ('Gohan') Display");
        //single product page web element assert
        await singleProductPage.isSingleProductPageWebElementDisplayed();
        //single product page text element assert
        await this.isSingleProductPageTextElementAsExpected();
        //log single product page product data
        await this.logSingleProductPageProductData();
        //click 'Scroll-down' link
        await singleProductPage.clickPreviousProductLink();
        //capture screenshot of the single product page display
        await TestMethods.captureScreenshot(this.driver, "Current = Single Product Page ('Salmon Teriyaki') Display");
        //single product page web element assert
        await singleProductPage.isSingleProductPageWebElementDisplayed();
        //single product page text element assert
        await this.isSingleProductPageTextElementAsExpected();
        //log single product page product data
        await this.logSingleProductPageProductData();
        //click 'Scroll-down' link
        await singleProductPage.clickPreviousProductLink();
        //capture screenshot of the single product page display
        await TestMethods.captureScreenshot(this.driver, "Current = Single Product Page ('Chicken Teriyaki') Display");
        //single product page web element assert
        await singleProductPage.isSingleProductPageWebElementDisplayed();
        //single product page text element assert
        await this.isSingleProductPageTextElementAsExpected();
        //log single product page product data
        await this.logSingleProductPageProductData();
        //click 'Scroll-down' link
        await singleProductPage.clickPreviousProductLink();
        //capture screenshot of the single product page display
        await TestMethods.captureScreenshot(this.driver, "Current = Single Product Page ('Ebi rolls') Display");
        //single product page web element assert
        await singleProductPage.isSingleProductPageWebElementDisplayed();
        //single product page text element assert
        await this.isSingleProductPageTextElementAsExpected();
        //log single product page product data
        await this.logSingleProductPageProductData();
        //click 'Scroll-down' link
        await singleProductPage.clickPreviousProductLink();
        //capture screenshot of the single product page display
        await TestMethods.captureScreenshot(this.driver, "Current = Single Product Page ('Spicy Tuna rolls') Display");
        //single product page web element assert
        await singleProductPage.isSingleProductPageWebElementDisplayed();
        //single product page text element assert
        await this.isSingleProductPageTextElementAsExpected();
        //log single product page product data
        await this.logSingleProductPageProductData();
        //click 'Scroll-down' link
        await singleProductPage.clickPreviousProductLink();
        //capture screenshot of the single product page display
        await TestMethods.captureScreenshot(this.driver, "Current = Single Product Page ('Seattle rolls') Display");
        //single product page web element assert
        await singleProductPage.isSingleProductPageWebElementDisplayed();
        //single product page text element assert
        await this.isSingleProductPageTextElementAsExpected();
        //log single product page product data
        await this.logSingleProductPageProductData();
        //click 'Scroll-down' link
        await singleProductPage.clickPreviousProductLink();
        //capture screenshot of the single product page display
        await TestMethods.captureScreenshot(this.driver, "Current = Single Product Page ('California rolls') Display");
        //single product page web element assert
        await singleProductPage.isSingleProductPageWebElementDisplayed();
        //single product page text element assert
        await this.isSingleProductPageTextElementAsExpected();
        //log single product page product data
        await this.logSingleProductPageProductData();
        //click 'Scroll-down' link
        await singleProductPage.clickPreviousProductLink();
        //capture screenshot of the single product page display
        await TestMethods.captureScreenshot(this.driver, "Current = Single Product Page ('Hosomaki mix') Display");
        //single product page web element assert
        await singleProductPage.isSingleProductPageWebElementDisplayed();
        //single product page text element assert
        await this.isSingleProductPageTextElementAsExpected();
        //log single product page product data
        await this.logSingleProductPageProductData();
        //click 'Scroll-down' link
        await singleProductPage.clickPreviousProductLink();
        //capture screenshot of the single product page display
        await TestMethods.captureScreenshot(this.driver, "Current = Single Product Page ('Tekka maki') Display");
        //single product page web element assert
        await singleProductPage.isSingleProductPageWebElementDisplayed();
        //single product page text element assert
        await this.isSingleProductPageTextElementAsExpected();
        //log single product page product data
        await this.logSingleProductPageProductData();
        //click 'Scroll-down' link
        await singleProductPage.clickPreviousProductLink();
        //capture screenshot of the single product page display
        await TestMethods.captureScreenshot(this.driver, "Current = Single Product Page ('Shiromi') Display");
        //single product page web element assert
        await singleProductPage.isSingleProductPageWebElementDisplayed();
        //single product page text element assert
        await this.isSingleProductPageTextElementAsExpected();
        //log single product page product data
        await this.logSingleProductPageProductData();
        //click 'Scroll-down' link
        await singleProductPage.clickPreviousProductLink();
        //capture screenshot of the single product page display
        await TestMethods.captureScreenshot(this.driver, "Current = Single Product Page ('Shake') Display");
        //single product page web element assert
        await singleProductPage.isSingleProductPageWebElementDisplayed();
        //single product page text element assert
        await this.isSingleProductPageTextElementAsExpected();
        //log single product page product data
        await this.logSingleProductPageProductData();
        //click 'Scroll-down' link
        await singleProductPage.clickPreviousProductLink();
        //capture screenshot of the single product page display
        await TestMethods.captureScreenshot(this.driver, "Current = Single Product Page ('Maguro') Display");
        //single product page web element assert
        await singleProductPage.isSingleProductPageWebElementDisplayed();
        //single product page text element assert
        await this.isSingleProductPageTextElementAsExpected();
        //log single product page product data
        await this.logSingleProductPageProductData();
        //click 'Scroll-down' link
        await singleProductPage.clickPreviousProductLink();
        //capture screenshot of the single product page display
        await TestMethods.captureScreenshot(this.driver, "Current = Single Product Page ('Miso soup') Display");
        //single product page web element assert
        await singleProductPage.isSingleProductPageWebElementDisplayed();
        //single product page text element assert
        await this.isSingleProductPageTextElementAsExpected();
        //log single product page product data
        await this.logSingleProductPageProductData();
        //click 'Scroll-down' link
        await singleProductPage.clickPreviousProductLink();
        //capture screenshot of the single product page display
        await TestMethods.captureScreenshot(this.driver, "Current = Single Product Page ('Edamame') Display");
        //single product page web element assert
        await singleProductPage.isSingleProductPageWebElementDisplayed();
        //single product page text element assert
        await this.isSingleProductPageTextElementAsExpected();
        //log single product page product data
        await this.logSingleProductPageProductData();
        //click 'Scroll-down' link
        await singleProductPage.clickPreviousProductLink();
        //capture screenshot of the single product page display
        await TestMethods.captureScreenshot(this.driver, "Current = Single Product Page ('Seaweed salad') Display");
        //single product page web element assert
        await singleProductPage.isSingleProductPageWebElementDisplayed();
        //single product page text element assert
        await this.isSingleProductPageTextElementAsExpected();
        //log single product page product data
        await this.logSingleProductPageProductData();
        //click 'Scroll-down' link
        await singleProductPage.clickPreviousProductLink();
        //capture screenshot of the single product page display
        await TestMethods.captureScreenshot(this.driver, "Current = Single Product Page ('Chirashi sushi') Display");
        //single product page web element assert
        await singleProductPage.isSingleProductPageWebElementDisplayed();
        //single product page text element assert
        await this.isSingleProductPageTextElementAsExpected();
        //log single product page product data
        await this.logSingleProductPageProductData();
        //click 'Scroll-down' link
        await singleProductPage.clickPreviousProductLink();
        //capture screenshot of the single product page display
        await TestMethods.captureScreenshot(this.driver, "Last = Single Product Page ('Sashimi salad') Display");
        //single product page web element assert
        await singleProductPage.isSingleProductPageWebElementDisplayed();
        //single product page text element assert
        await this.isSingleProductPageTextElementAsExpected();
        //log single product page product data
        await this.logSingleProductPageProductData();
        //capture screenshot of the single product page display
        await TestMethods.captureScreenshot(this.driver, "Scroll Down Through Single Product Pages Test Result");
    }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //checkout page tests

    //product order checkout test method
    async checkoutProductOrderTest(){
        const generalPage = new GeneralPage(this.driver);
        const homePage = new HomePage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //click 'Checkout' button
        await homePage.clickCheckoutButton();
        //checkout page web element assert
        await checkoutPage.isCheckoutPageWebElementDisplayed();
        //checkout page text element assert
        await this.isCheckoutPageTextElementAsExpected();
        //log checkout page product order data
        await this.logCheckoutPageProductOrderData();
        //capture screenshot of the checkout page display
        await TestMethods.captureScreenshot(this.driver, "Checkout Page Display");
        //click 'Order now' button
        await checkoutPage.clickOrderNowButton();
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Checkout Product Order Test Result");
    }

    //product (increase quantity) order checkout test method
    async checkoutIncreaseProductQuantityOrderTest(){
        const generalPage = new GeneralPage(this.driver);
        const homePage = new HomePage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //click 'Checkout' button
        await homePage.clickCheckoutButton();
        //checkout page web element assert
        await checkoutPage.isCheckoutPageWebElementDisplayed();
        //checkout page text element assert
        await this.isCheckoutPageTextElementAsExpected();
        //log checkout page product order data
        await this.logCheckoutPageProductOrderData();
        //capture screenshot of the checkout page display before product quantity increase
        await TestMethods.captureScreenshot(this.driver, "Checkout Page (Before Product Quantity Increase) Display");
        //click 'Increase product quantity' button
        await checkoutPage.clickIncreaseQuantityButton(0)
        //capture screenshot of the checkout page display after product quantity increase
        await TestMethods.captureScreenshot(this.driver, "Checkout Page (After Product Quantity Increase) Display");
        //click 'Order now' button
        await checkoutPage.clickOrderNowButton();
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Checkout Product Order (After Product Quantity Increase) Test Result");
    }

    //product (decrease quantity) order checkout test method
    async checkoutDecreaseProductQuantityOrderTest(){
        const generalPage = new GeneralPage(this.driver);
        const homePage = new HomePage(this.driver);
        const checkoutPage = new CheckoutPage(this.driver);
        //general page web element assert
        await generalPage.isGeneralPageWebElementDisplayed();
        //general page text element assert
        await this.isGeneralPageTextElementAsExpected();
        //click 'Checkout' button
        await homePage.clickCheckoutButton();
        //checkout page web element assert
        await checkoutPage.isCheckoutPageWebElementDisplayed();
        //checkout page text element assert
        await this.isCheckoutPageTextElementAsExpected();
        //log checkout page product order data
        await this.logCheckoutPageProductOrderData();
        //capture screenshot of the checkout page display before product quantity increase
        await TestMethods.captureScreenshot(this.driver, "Checkout Page (Before Product Quantity Decrease) Display");
        //click 'Increase product quantity' button
        await checkoutPage.clickDecreaseQuantityButton(0)
        //capture screenshot of the checkout page display after product quantity increase
        await TestMethods.captureScreenshot(this.driver, "Checkout Page (After Product Quantity Decrease) Display");
        //click 'Order now' button
        await checkoutPage.clickOrderNowButton();
        //capture screenshot of the test result
        await TestMethods.captureScreenshot(this.driver, "Checkout Product Order (After Product Quantity Decrease) Test Result");
    }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //general page text element assert test method
    async isGeneralPageTextElementAsExpected(){
        const generalPage = new GeneralPage(this.driver);
        //assert header shopping cart text is as expected
        const headerShopCartText = await generalPage.getHeaderShoppingCartText();
        assert.strictEqual(headerShopCartText, "SHOPPING CART", "The header shopping cart text doesn't match expectations.");
        //assert footer learn info text is as expected
        const footerLearnInfoText = await generalPage.getFooterLearnInfoText();
        assert.strictEqual(footerLearnInfoText, "Learn more about Kendo UI for jQuery® SPA at docs.telerik.com/kendo-ui.", "The footer learn info text doesn't match expectations.");
        //assert footer learn info text is as expected
        const footerCopyrightText = await generalPage.getFooterCopyrightText();
        assert.strictEqual(footerCopyrightText, "Copyright © 2025, Progress Software Corporation and/or its subsidiaries or affiliates. All Rights Reserved.", "The footer learn info text doesn't match expectations.");
    }

    //shop cart info text element assert test method
    async isShopCartInfoTextElementAsExpected(){
        const homePage = new HomePage(this.driver);
        //assert shop cart  info title is as expected
        const shopCartInfoTitle = await homePage.getShopCartInfoTitle();
        assert.strictEqual(shopCartInfoTitle, "YOUR\n" + "SHOPPING CART", "The shopping cart info title doesn't match expectations.")
    }

    //single product page text element assert test method
    async isSingleProductPageTextElementAsExpected(){
        const singleProductPage = new SingleProductPage(this.driver);
        //assert single product page nutritional info subtitle is as expected
        const singleProductPageNutritionalInfoSubtitle = await singleProductPage.getSingleProductNutritionalInfoSubtitle();
        assert.strictEqual(singleProductPageNutritionalInfoSubtitle, "Nutritional Information", "The single product page nutritional info subtitle doesn't match expectations.");
    }

    //checkout page text element assert method
    async isCheckoutPageTextElementAsExpected(){
        const checkoutPage = new CheckoutPage(this.driver);
        //assert checkout page title is as expected
        const checkoutPageTitle = await checkoutPage.getCheckoutPageTitle();
        assert.strictEqual(checkoutPageTitle, "Order Details", "The checkout page title doesn't match expectations.");
        //assert checkout page item subtext is as expected
        const checkoutPageItemSubtext = await checkoutPage.getCheckoutPageItemSubtext();
        assert.strictEqual(checkoutPageItemSubtext, "ITEM", "The checkout page item subtext doesn't match expectations.");
        //assert checkout page quantity subtext is as expected
        const checkoutPageQtySubtext = await checkoutPage.getCheckoutPageQuantitySubtext();
        assert.strictEqual(checkoutPageQtySubtext, "QUANTITY", "The checkout page quantity subtext doesn't match expectations.");
        //assert checkout page price subtext is as expected
        const checkoutPagePriceSubtext = await checkoutPage.getCheckoutPagePriceSubtext();
        assert.strictEqual(checkoutPagePriceSubtext, "PRICE", "The checkout page price subtext doesn't match expectations.");
        //assert checkout page total price subtext is as expected
        const checkoutPageTotalPriceSubtext = await checkoutPage.getCheckoutPageTotalPriceSubtext();
        assert.strictEqual(checkoutPageTotalPriceSubtext, "TOTAL:", "The checkout page total price subtext doesn't match expectations.");
    }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //home page product data logger method
    async logHomePageProductData(){
        const homePage = new HomePage(this.driver);
        //log home page product names
        const homePageProductName = await homePage.getHomePageProductName();
        Logger.info("Home page product name(s): " + homePageProductName);
        //log home page product unit prices
        const homePageProductUnitPrice = await homePage.getHomePageProductUnitPrice();
        Logger.info("Home page product unit price(s): " + homePageProductUnitPrice);
    }

    //shop cart info data logger method (on home page)
    async logShopCartInfoProductData(){
        const homePage = new HomePage(this.driver);
        //log shop cart info product unit prices
        const homePageShopCartProductUnitPrice = await homePage.getShopCartInfoProductUnitPrice();
        Logger.info("Shop cart info product unit price(s): " + homePageShopCartProductUnitPrice);
        //log shop cart info price
        const homePageShopCartPrice = await homePage.getShopCartInfoPrice();
        Logger.info("Shop cart info price: " + homePageShopCartPrice);
    }

    //single product page data logger method
    async logSingleProductPageProductData(){
        const singleProductPage = new SingleProductPage(this.driver);
        //log single product page product name
        const singleProductPageProductName = await singleProductPage.getSingleProductTitle();
        Logger.info("Single product page product name: " + singleProductPageProductName);
        //log single product page product description
        const singleProductPageProductDescription = await singleProductPage.getSingleProductDescription();
        Logger.info("Single product page product description: " + singleProductPageProductDescription);
        //log single product page product unit price
        const singleProductPageProductUnitPrice = await singleProductPage.getSingleProductUnitPrice();
        Logger.info("Single product page product unit price: " + singleProductPageProductUnitPrice);
        //log single product page product nutritional data
        const singleProductPageProductNutritionalData = await singleProductPage.getSingleProductNutritionalData();
        Logger.info("Single product page product nutritional data: " + singleProductPageProductNutritionalData);
    }

    //checkout page product order data logger method
    async logCheckoutPageProductOrderData(){
        const checkoutPage = new CheckoutPage(this.driver);
        //log checkout page product name(s)
        const checkoutPageProductName = await checkoutPage.getCheckoutPageOrderProductName();
        Logger.info("Checkout page order product name(s): " + checkoutPageProductName);
        //log checkout page product quantity(ies)
        const checkoutPageProductQty = await checkoutPage.getCheckoutPageOrderProductQty();
        Logger.info("Checkout page order product quantity(ies): " + checkoutPageProductQty);
        //log checkout page product price(s)
        const checkoutPageProductPrice = await checkoutPage.getCheckoutPageOrderProductPrice();
        Logger.info("Checkout page order product price(s): " + checkoutPageProductPrice);
        //log checkout page product total price
        const checkoutPageProductTotalPrice = await checkoutPage.getCheckoutPageTotalPrice();
        Logger.info("Checkout page order product total price: " + checkoutPageProductTotalPrice);
        //assert the price and total prices match, log the issue otherwise
        try {
            assert.strictEqual(checkoutPageProductPrice, checkoutPageProductTotalPrice, "The product price and total price don't match expectations.");
        } catch (e) {
            Logger.error(`Set product ${checkoutPageProductName} has mismatching product price and total price.`);
        }
    }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //screenshot utility
    static async captureScreenshot(driver, fileName) {
        try {
            await driver.sleep(1500); //wait for the screenshot to be taken
            const screenshot = await driver.takeScreenshot();
            const baseDir = path.join(__dirname, '../screenshots');
            fs.mkdirSync(baseDir, {recursive: true});
            const filePath = path.join(baseDir, `${fileName.replace(/[^a-zA-Z0-9-_\(\)]/g, ' ')}.png`);

            // Save the screenshot to the file
            fs.writeFileSync(filePath, screenshot, 'base64');

            console.log(`Screenshot saved at: ${filePath}`);
        } catch (error) {
            console.error('Error capturing screenshot:', error);
        }
    }


}
module.exports = TestMethods;