// Import the cucumber operators we need
import { Before, Given, Then, When } from "cucumber";
import { AppPage } from "../app.po";
import { element, by } from "protractor";
import { expect } from "chai";

let page: AppPage;

Before(() => {
  page = new AppPage();
});

Given('I am bowling', async () => {
    // Write code here that turns the phrase above into concrete actions
    await page.navigateTo();
  });

When('I knock down {int} pins on the first ball', async (int) => {
// When('I knock down {float} pins on the first ball', function (float) {
    // Write code here that turns the phrase above into concrete actions
    var firstBall = element(by.id("firstBall"));
    firstBall = int;
});

When('{int} pins on the second ball', async (int) => {
    // When('{float} pins on the second ball', function (float) {
        // Write code here that turns the phrase above into concrete actions
        var secondBall = element(by.id("secondBall"));
        secondBall = int;

        const enterButton = element(by.id("enterButton"));
        await enterButton.click();
    });

Then('the total will show {int}', async (int) => {
    // Then('the total will show {float}', function (float) {
        // Write code here that turns the phrase above into concrete actions
        var total = element(by.id("total")).getText();

        expect(await element(by.id("total")).getText()).to.equal(int);
    });

