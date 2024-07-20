

class HomePage{
    // WebElement

    get signInBtn(){ return $(".login"); }

    get contact_link(){ return $("#contact-link") }

    get img_logo(){ return $(".logo.img-responsive") }


    // Actions 
  async  navigateToLoginPage()
    {
       await this.signInBtn.click();
    }


}

module.exports = new HomePage()