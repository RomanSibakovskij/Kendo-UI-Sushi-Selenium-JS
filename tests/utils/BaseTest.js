"use strict";
const { Builder } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

class BaseTest {
    constructor() {
        this.driver = null; //initialize driver as null
    }


    async beforeEach() {
        const options = new chrome.Options();

        options.addArguments('--disable-search-engine-choice-screen');

        //initialize the driver with the specified options
        this.driver = await new Builder()
            .forBrowser('chrome')
            .setChromeOptions(options)
            .build();

        await this.driver.manage().window().maximize();
        await this.driver.get("https://demos.telerik.com/kendo-ui/websushi#/");
    }

    //WebDriver clean-up after each test
    async afterEach() {
        try {
            //pause for the visual test result assertion
            await new Promise(resolve => setTimeout(resolve, 2000));
        } catch (error) {
            console.error('Error in sleep:', error); //catch possible errors (the chance is minute)
        } finally {
            if (this.driver) {
                await this.driver.quit(); //initialize closure
            }
        }
    }
}

module.exports = BaseTest;
