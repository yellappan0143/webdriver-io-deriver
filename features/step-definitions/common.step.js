import { Given, Then, When } from "@wdio/cucumber-framework/build/cjs";
import commonPage from "../pageobjects/common.page";
import HomePage from "../pageobjects/Home.page";





Given(/^I am on the (.*?) page$/,async () => {
	await commonPage.openHomePage();

    expect(HomePage.signInBtn)
});

Then(/^Navigate to SignUp page$/, () => {
	
});

Then(/^create an account with random username$/, () => {
	
});


When(/^verify the page title "([^"]*)" of the webpage$/, (args1) => {
	console.log(args1);
	return true;
});

