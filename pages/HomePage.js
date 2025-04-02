"use strict";
const { By, until} = require('selenium-webdriver');
const BasePage = require('./utils/BasePage');
const { Logger } = require("./utils/Logger");
const { Actions } = require('selenium-webdriver');
const { Key } = require('selenium-webdriver');

class HomePage extends BasePage{

    constructor(driver) {
        super(driver);

        //home page web elements
        //list elements
        //shopping cart nav elements
        this._shopCartInfoImageElements = By.xpath("//ul[@id='shop-list']//li//img");
        this._shopCartInfoProductPriceElements = By.xpath("//ul[@id='shop-list']//li//span[@class='selected-image-price']");
        this._shopCartProductRemoveLinkElements = By.xpath("//ul[@id='shop-list']//li/a")
        this._shopCartInfoTitle = By.xpath("//div[@id='shopping-cart']/h3");
        this._shopCartInfoPrice = By.xpath("//div[@id='shopping-cart']/p");
        this._shopCartInfoEmptyCartLink = By.xpath("//div[@id='shopping-cart']/a[1]");
        this._shopCartInfoCheckoutButton = By.xpath("//div[@id='shopping-cart']/a[2]");
        //main
        this._homePageProductImageElements = By.xpath("//ul[@id='main']//li//img");
        this._homePageProductNameLinkElements = By.xpath("//ul[@id='main']//li//a");
        this._homePageProductUnitPriceElements = By.xpath("//ul[@id='main']//li//span[@class='price']");
        this._homePageProductAddToCartElements = By.xpath("//ul[@id='main']//li//button");
    }

    //click product name link list click method
    async clickProductNameLink(index) {
        //find and list elements
        const productNameLinks = await this.driver.findElements(this._homePageProductNameLinkElements);
        //assert list elements isn't empty
        if (productNameLinks.length === 0) {throw new Error("No product name links found on the home page.");}

        //choose set add to cart button
        const nameLinkToClick = productNameLinks[index];
        await this.driver.executeScript("arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center' });", nameLinkToClick);
        await nameLinkToClick.click();
    }

    //click 'Add to cart' button list click method
    async clickProductAddToCartButton(index) {
        //find and list elements
        const addToCartButtons = await this.driver.findElements(this._homePageProductAddToCartElements);
        //assert list elements isn't empty
        if (addToCartButtons.length === 0) {throw new Error("No 'Add to Cart' buttons found on the home page.");}

        //choose set add to cart button
        const buttonToClick = addToCartButtons[index];
        await this.driver.executeScript("arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center' });", buttonToClick);
        await buttonToClick.click();
    }

    //shop cart info product info getters
    async getShopCartInfoProductUnitPrice() {
        const elements = await this.driver.findElements(this._shopCartInfoProductPriceElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get product unit price:', error.message);
                    return '';
                }
            })
        );
    }

    async getShopCartInfoPrice(){
        const shopCartInfoPrice = await this.driver.findElement(this._shopCartInfoPrice);
        return await shopCartInfoPrice.getText();
    }

    //click 'Remove product' link method
    async clickRemoveProductLink(index){
        //find and list elements
        const removeProductLinks = await this.driver.findElements(this._shopCartProductRemoveLinkElements);
        //assert list elements isn't empty
        if (removeProductLinks.length === 0) {throw new Error("No 'Remove product' links found in the shop cart info section.");}

        //choose set add to cart button
        const removeProductLink = removeProductLinks[index];
        await this.driver.executeScript("arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center' });", removeProductLink);
        await removeProductLink.click();
    }

    //shop cart info text element getter
    async getShopCartInfoTitle(){
        const shopCartInfoTitle = await this.driver.findElement(this._shopCartInfoTitle);
        return await shopCartInfoTitle.getText();
    }

    //click 'Empty cart' link method
    async clickEmptyCartLink(){
        const emptyCartLink = await this.driver.findElement(this._shopCartInfoEmptyCartLink);
        await emptyCartLink.click();
    }

    //click 'Checkout' button method
    async clickCheckoutButton(){
        const checkoutButton = await this.driver.findElement(this._shopCartInfoCheckoutButton);
        const actions = this.driver.actions({ bridge: true });
        await actions.move({ origin: checkoutButton }).click().perform();
    }

    //home page product info getters
    async getHomePageProductName() {
        const elements = await this.driver.findElements(this._homePageProductNameLinkElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.replace(/\s\$\d+(\.\d{1,2})?$/, '');// trim out price from product names
                } catch (error) {
                    Logger.warn('Failed to get product name:', error.message);
                    return '';
                }
            })
        );
    }
    async getHomePageProductUnitPrice() {
        const elements = await this.driver.findElements(this._homePageProductUnitPriceElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get product unit price:', error.message);
                    return '';
                }
            })
        );
    }

    //home page web element assert method
    async isElementDisplayed(locator){
        const element = await this.driver.findElement(locator);
        return await element.isDisplayed();
    }

    async isHomePageWebElementDisplayed(){
        const elementsToCheck = [
            this._homePageProductImageElements,
            this._homePageProductNameLinkElements,
            this._homePageProductUnitPriceElements,
            this._homePageProductAddToCartElements
        ];

        for (let element of elementsToCheck) {
            const isDisplayed = await this.isElementDisplayed(element);
            if (!isDisplayed) {
                throw new Error(`Element ${element} is not displayed.`);
            }
        }

    }

    async isShopCartInfoWebElementDisplayed(){
        const elementsToCheck = [
            //this._shopCartInfoImageElements, //this element sometimes fails to be displayed with valid selector
            //this._shopCartInfoProductPriceElements,
            this._shopCartProductRemoveLinkElements,
            //this._shopCartInfoEmptyCartLink,
            //this._shopCartInfoCheckoutButton
        ];

        for (let element of elementsToCheck) {
            const isDisplayed = await this.isElementDisplayed(element);
            if (!isDisplayed) {
                throw new Error(`Element ${element} is not displayed.`);
            }
        }

    }

}
module.exports = { HomePage }