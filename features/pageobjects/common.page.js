
class CommonPage{

    openHomePage(){
        browser.url("http://www.automationpractice.pl/index.php")
        console.log("Browser is lanuched");

        const browserTitle=browser.getTitle();
    }
}
module.exports = new CommonPage();