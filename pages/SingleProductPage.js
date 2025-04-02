"use strict";
const { By, until} = require('selenium-webdriver');
const BasePage = require('./utils/BasePage');
const { Logger } = require("./utils/Logger");
const { Actions } = require('selenium-webdriver');
const { Key } = require('selenium-webdriver');

class SingleProductPage extends BasePage{

    constructor(driver) {
        super(driver);

        //single product page web elements
        this._singleProductPageTopImage = By.xpath("//div[@id='details-top-image']");
        this._singleProductPageBottomImage = By.xpath("//div[@id='details-bottom-image']");
        this._singleProductPagePreviousProductLink = By.xpath("//div[@id='details']/a[1]");
        this._singleProductPageNextProductLink = By.xpath("//div[@id='details']/a[2]");
        this._singleProductTitle = By.xpath("//div[@id='description']/h1");
        this._singleProductImage = By.xpath("//div[@id='detail-info']/img");
        this._singleProductDescription = By.xpath("//div[@id='description']/p");
        this._singleProductUnitPrice = By.xpath("//div[@id='details-total']/p");
        this._singleProductPageAddToCartButton = By.xpath("//div[@id='details-total']/button");
        this._singleProductNutritionalInfoSubtitle = By.xpath("//div[@id='nutrition-info']/h2");
        this._singleProductNutritionalData = By.xpath("//div[@id='nutrition-info']/dl");

    }

    //click 'Add to cart' button method
    async clickAddToCartButton(){
        const addToCartButton = await this.driver.findElement(this._singleProductPageAddToCartButton);
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: addToCartButton }).click().perform();
    }

    //click 'Previous product' link method
    async clickPreviousProductLink(){
        const previousProductLink = await this.driver.findElement(this._singleProductPagePreviousProductLink);
        await previousProductLink.click();
    }

    //click 'Next product' link method
    async clickNextProductLink(){
        const nextProductLink = await this.driver.findElement(this._singleProductPageNextProductLink);
        await nextProductLink.click();
    }

    //single product page product data getters
    async getSingleProductTitle(){
        const singleProductTitle = await this.driver.findElement(this._singleProductTitle);
        return await singleProductTitle.getText();
    }
    async getSingleProductDescription(){
        const singleProductDescription = await this.driver.findElement(this._singleProductDescription);
        return await singleProductDescription.getText();
    }
    async getSingleProductUnitPrice(){
        const singleProductUnitPrice = await this.driver.findElement(this._singleProductUnitPrice);
        return await singleProductUnitPrice.getText();
    }
    async getSingleProductNutritionalData(){
        const singleProductNutritionalData = await this.driver.findElement(this._singleProductNutritionalData);
        return await singleProductNutritionalData.getText();
    }

    //single product page text element getter
    async getSingleProductNutritionalInfoSubtitle(){
        const singleProductNutritionalInfoSubtitle = await this.driver.findElement(this._singleProductNutritionalInfoSubtitle);
        return await singleProductNutritionalInfoSubtitle.getText();
    }

    //home page web element assert method
    async isElementDisplayed(locator){
        const element = await this.driver.findElement(locator);
        return await element.isDisplayed();
    }

    async isSingleProductPageWebElementDisplayed(){
        const elementsToCheck = [
            this._singleProductPageTopImage,
            this._singleProductPageBottomImage,
            this._singleProductTitle,
            this._singleProductPagePreviousProductLink,
            this._singleProductPageNextProductLink,
            this._singleProductImage,
            this._singleProductDescription,
            this._singleProductUnitPrice,
            this._singleProductPageAddToCartButton,
            this._singleProductNutritionalInfoSubtitle,
            this._singleProductNutritionalData
        ];

        for (let element of elementsToCheck) {
            const isDisplayed = await this.isElementDisplayed(element);
            if (!isDisplayed) {
                throw new Error(`Element ${element} is not displayed.`);
            }
        }

    }

}
module.exports = { SingleProductPage }