"use strict";
const { By, until} = require('selenium-webdriver');
const BasePage = require('./utils/BasePage');
const { Logger } = require("./utils/Logger");
const { Actions } = require('selenium-webdriver');
const { Key } = require('selenium-webdriver');

class CheckoutPage extends BasePage{

    constructor(driver){
        super(driver)

        //checkout page web elements
        this._checkoutPageTitle = By.xpath("//div[@id='details-checkout']/h1");
        this._checkoutPageItemSubtext = By.xpath("//table/thead//th[1]");
        this._checkoutPageQuantitySubtext = By.xpath("//table/thead//th[2]");
        this._checkoutPagePriceSubtext = By.xpath("//table/thead//th[3]");
        this._checkoutPageTotalPriceSubtext = By.xpath("//div[@id='details-checkout']/p/em");
        //product order list elements
        this._checkoutPageOrderProductImageElements = By.xpath("//table/tbody//tr/td[1]//img");
        this._checkoutPageOrderProductNameElements = By.xpath("//table/tbody//tr/td[1]/span");
        this._checkoutPageOrderProductQtyInputFieldElements = By.css("td span.k-numerictextbox input.k-input-inner[role='spinbutton']:not([style*='display: none'])");
        this._checkoutPageOrderProductQtyIncreaseButtonElements = By.xpath("//table/tbody//tr/td[2]//button[1]");
        this._checkoutPageOrderProductQtyDecreaseButtonElements = By.xpath("//table/tbody//tr/td[2]//button[2]");
        this._checkoutPageOrderProductPriceElements = By.xpath("//table/tbody//tr/td[3]/p[1]");
        //singular elements
        this._checkoutPageTotalPrice = By.xpath("//div[@id='details-checkout']/p/span");
        this._checkoutPageCancelOrderLink = By.xpath("//a[@class='cancel-order']");
        this._checkoutPageOrderNowButton = By.xpath("//button[@class='order-now']");

    }

    //click 'Increase quantity' button method
    async clickIncreaseQuantityButton(index){
        const increaseQuantityButtons = await this.driver.findElements(this._checkoutPageOrderProductQtyIncreaseButtonElements);
        const targetButton = increaseQuantityButtons[index];
        const actions = this.driver.actions({ bridge : true });
        await actions.move({ origin: targetButton }).click().perform();
        //zero in on the quantity input field to send ENTER key
        const quantityInput = await this.driver.findElement(this._checkoutPageOrderProductQtyInputFieldElements);
        //send ENTER key to apply the updated quantity
        await quantityInput.sendKeys(Key.ENTER);
    }

    //click 'Decrease quantity' button method
    async clickDecreaseQuantityButton(index){
        const decreaseQuantityButtons = await this.driver.findElements(this._checkoutPageOrderProductQtyDecreaseButtonElements);
        const targetButton = decreaseQuantityButtons[index];
        const actions = this.driver.actions({ bridge : true });
        await actions.move({ origin: targetButton }).click().perform();
        //zero in on the quantity input field to send ENTER key
        const quantityInput = await this.driver.findElement(this._checkoutPageOrderProductQtyInputFieldElements);
        //send ENTER key to apply the updated quantity
        await quantityInput.sendKeys(Key.ENTER);
    }

    //click 'Cancel order' link method
    async clickCancelOrderLink(){
        const cancelOrderLink = await this.driver.findElement(this._checkoutPageCancelOrderLink);
        await cancelOrderLink.click();
    }

    //click 'Order now' button method
    async clickOrderNowButton(){
        const orderNowButton = await this.driver.findElement(this._checkoutPageOrderNowButton);
        const actions = this.driver.actions({ bridge : true });
        await actions.move({ origin: orderNowButton }).click().perform();
    }

    //checkout page product order data getters
    async getCheckoutPageOrderProductName() {
        const elements = await this.driver.findElements(this._checkoutPageOrderProductNameElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get product name:', error.message);
                    return '';
                }
            })
        );
    }

    async getCheckoutPageOrderProductQty() {
        //target the visible input (the first one that doesn't have display:none)
        const quantityInput = await this.driver.findElement(By.xpath("//td/span[contains(@class, 'k-numerictextbox')]//input[@role='spinbutton' and not(contains(@style, 'display: none'))]"));

        //extract the value from the aria-valuenow attribute
        return await quantityInput.getAttribute("aria-valuenow");
    }

    async getCheckoutPageOrderProductPrice() {
        const elements = await this.driver.findElements(this._checkoutPageOrderProductPriceElements);

        return await Promise.all(
            elements.map(async (element) => {
                try {
                    const text = await element.getText();
                    return text.trim();
                } catch (error) {
                    Logger.warn('Failed to get product price:', error.message);
                    return '';
                }
            })
        );
    }

    async getCheckoutPageTotalPrice(){
        const checkoutPageTotalPrice = await this.driver.findElement(this._checkoutPageTotalPrice);
        return await checkoutPageTotalPrice.getText();
    }

    //checkout page text element getters
    async getCheckoutPageTitle(){
        const checkoutPageTitle = await this.driver.findElement(this._checkoutPageTitle);
        return await checkoutPageTitle.getText();
    }
    async getCheckoutPageItemSubtext(){
        const checkoutPageItemSubtext = await this.driver.findElement(this._checkoutPageItemSubtext);
        return await checkoutPageItemSubtext.getText();
    }
    async getCheckoutPageQuantitySubtext(){
        const checkoutPageQuantitySubtext = await this.driver.findElement(this._checkoutPageQuantitySubtext);
        return await checkoutPageQuantitySubtext.getText();
    }
    async getCheckoutPagePriceSubtext(){
        const checkoutPagePriceSubtext = await this.driver.findElement(this._checkoutPagePriceSubtext);
        return await checkoutPagePriceSubtext.getText();
    }
    async getCheckoutPageTotalPriceSubtext(){
        const checkoutPageTotalPriceSubtext = await this.driver.findElement(this._checkoutPageTotalPriceSubtext);
        return await checkoutPageTotalPriceSubtext.getText();
    }

    //checkout page web element assert method
    async isElementDisplayed(locator){
        const element = await this.driver.findElement(locator);
        return await element.isDisplayed()
    }

    async isCheckoutPageWebElementDisplayed(){
        const elementsToCheck = [
            this._checkoutPageTitle,
            this._checkoutPageItemSubtext,
            this._checkoutPageQuantitySubtext,
            this._checkoutPagePriceSubtext,
            this._checkoutPageTotalPriceSubtext,
            this._checkoutPageOrderProductImageElements,
            this._checkoutPageOrderProductNameElements,
            this._checkoutPageOrderProductQtyInputFieldElements,
            this._checkoutPageOrderProductQtyIncreaseButtonElements,
            this._checkoutPageOrderProductQtyDecreaseButtonElements,
            this._checkoutPageOrderProductPriceElements,
            this._checkoutPageTotalPrice,
            this._checkoutPageCancelOrderLink,
            this._checkoutPageOrderNowButton
        ];

        for(let element of elementsToCheck){
            const isDisplayed = await this.isElementDisplayed(element);
            if(!isDisplayed){
                throw new Error(`Element ${element} is not displayed.`);
            }
        }

    }


}
module.exports = { CheckoutPage }