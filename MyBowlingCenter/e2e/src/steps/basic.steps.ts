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

When('I knock down {int} pins on the first ball', function (int) {
// When('I knock down {float} pins on the first ball', function (float) {
    // Write code here that turns the phrase above into concrete actions
    const firstBall = element(by.id("firstBall")).getText();
});

When('{int} pins on the second ball', function (int) {
    // When('{float} pins on the second ball', function (float) {
        // Write code here that turns the phrase above into concrete actions
        const secondBall = element(by.id("secondBall")).getText();
    });

Then('the total will show {int}', function (int) {
    // Then('the total will show {float}', function (float) {
        // Write code here that turns the phrase above into concrete actions
        expect();
    });

