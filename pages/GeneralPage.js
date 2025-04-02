"use strict";
const { By, until} = require('selenium-webdriver');
const BasePage = require('./utils/BasePage');
const { Logger } = require("./utils/Logger");
const { Actions } = require('selenium-webdriver');
const { Key } = require('selenium-webdriver');

class GeneralPage extends BasePage{

    constructor(driver) {
        super(driver);

        //general page web elements (elements that all other pages share)
        //header
        this._headerLogo = By.xpath("//div[@id='header']/h1");
        this._headerShoppingCartButton = By.xpath("//div[@id='header']/a");
        //footer
        this._footerLearnInfoText = By.xpath("//div[@id='footer']/p[1]");
        this._footerLearnInfoDocsLink = By.xpath("//div[@id='footer']/p[1]/a");
        this._footerCopyrightText = By.xpath("//div[@id='footer']/p[2]");

    }

    //general page text element getters
    //header
    async getHeaderShoppingCartText(){
        const headerShoppingCartText = await this.driver.findElement(this._headerShoppingCartButton);
        const fullText = await headerShoppingCartText.getText();
        return fullText.split("SHOPPING CART")[0] + "SHOPPING CART";
    }
    //footer
    async getFooterLearnInfoText(){
        const headerLearnInfoText = await this.driver.findElement(this._footerLearnInfoText);
        return await headerLearnInfoText.getText();
    }
    async getFooterCopyrightText(){
        const headerCopyrightText = await this.driver.findElement(this._footerCopyrightText);
        return await headerCopyrightText.getText();
    }

    //general page web element assert method
    async isElementDisplayed(locator){
        const element = await this.driver.findElement(locator);
        return await element.isDisplayed();
    }

    async isGeneralPageWebElementDisplayed(){
        const elementsToCheck = [
            this._headerLogo,
            this._headerShoppingCartButton,
            this._footerLearnInfoText,
            this._footerLearnInfoDocsLink,
            this._footerCopyrightText
        ];

        for (let element of elementsToCheck) {
            const isDisplayed = await this.isElementDisplayed(element);
            if (!isDisplayed) {
                throw new Error(`Element ${element} is not displayed.`);
            }
        }

    }


}
module.exports = { GeneralPage }