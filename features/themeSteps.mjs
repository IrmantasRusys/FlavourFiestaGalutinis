import { Given, When, Then, After } from "@cucumber/cucumber";
import puppeteer from "puppeteer";
import { expect } from "chai";

let browser;
let page;

Given(
  "vartotojas yra pradiniame puslapyje ir {string} režimas yra aktyvus",
  async function (mode) {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto("http://localhost:3000");
    await page.evaluate(() =>
      document.documentElement.setAttribute("data-theme", mode)
    );
  }
);

When(
  "vartotojas paspaudžia mygtuką perjungti į {string} režimą puslapio viršuje",
  async function (mode) {
    await page.click("[data-theme-btn]");
  }
);

Then("puslapis turi pereiti į {string} režimą", async function (expectedMode) {
  const theme = await page.evaluate(() =>
    document.documentElement.getAttribute("data-theme")
  );
  expect(theme).to.equal(expectedMode);
});

Then(
  "puslapio dizainas turi būti {string} ir lengvai skaitomas",
  async function (expectedDesign) {
    const backgroundColor = await page.evaluate(
      () => getComputedStyle(document.documentElement).backgroundColor
    );
    if (expectedDesign === "šviesus") {
      expect(backgroundColor).to.equal("rgb(255, 255, 255)");
    } else if (expectedDesign === "tamsus") {
      expect(backgroundColor).to.equal("rgb(0, 0, 0)");
    }
  }
);

After(async function () {
  if (browser) {
    await browser.close();
  }
});
