import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get btn_close_newsletter  ()  {return $(`//div[@id="newsletter"]/div[@class="lightbox__modal"]/button/i[@class="icon icon-close"]`)};

    get loginButton  ()  {return $("//header[contains(@class,'header js')]//div[contains(@class,'area--middle')]//div[contains(@class,'user')]/div[@class='user__panel']")};
    get btn_enter_email_password  ()  {return $(`//div[@id="vtexIdUI-auth-selector"]//button[@id="loginWithUserAndPasswordBtn"]`)};
    get your_email  ()  {return $(`//div[@id="vtexIdUI-classic-login"]//input[@id="inputEmail"]`)};
    get your_password  ()  {return $(`//div[@id="vtexIdUI-classic-login"]//input[@id="inputPassword"]`)};
    get btn_login  ()  {return $(`//div[@id="vtexIdUI-classic-login"]//button[@id="classicLoginBtn"]`)};
    get btn_return  ()  {return $(`//div[@id="vtexIdUI-classic-login"]//a/span[.="Voltar"]`)};
    get btn_close_login_page  ()  {return $(`//div[@id="vtexIdUI-classic-login"]//button[@ng-show="canClose"]`)};

    get btn_headerLoginProvisóio  ()  {return $('.header > .header__area--middle > .header__container > .header__user')}
    get btn_Modal_DadosPessoais  ()  {return $('//header[contains(@class,"actual-menu-style")]//div[@class="user__modal"]//a[contains(@href,"/account/#/profile")]')};
    get btn_EditarDados  ()  {return $('//footer/button/div/span[.="Editar"]')};
    get input_Nome  ()  {return$('//div[contains(@class,"vtex-profile-form__field-wrapper vtex-profile-form__firstName  pb7")]//input')};
    get input_LastName  ()  {return$('//div[contains(@class,"vtex-profile-form__field-wrapper vtex-profile-form__lastName  pb7")]//input')};
    get input_cpf  ()  {return $('//div[contains(@class,"vtex-profile-form__field-wrapper vtex-profile-form__document  pb7")]//input')};
    get input_phone  ()  {return $('//div[contains(@class,"vtex-profile-form__field-wrapper vtex-profile-form__homePhone  pb7")]//input')};
    get input_birthDate  ()  {return $('//div[contains(@class,"vtex-profile-form__field-wrapper vtex-profile-form__birthDate  pb7")]//input')};
    get comboBox_gender  ()  {return $('//div[contains(@class,"vtex-dropdown")]//select')};
    get comboBoxGender_value ()  {return $('//div[contains(@class,"vtex-dropdown")]//div//div[@class ="vtex-dropdown__caption flex-auto tl truncate"]')}
    get btn_SalvarAlteracoes  ()  {return $('//div//span[.="Salvar alterações"]')};

    get btnAddCards (){return $('//div[@class="user__modal"]//a[contains(@href,"/account/#/cards")]')};
    get btnAbrirModalMyAccount () {return $('.header > .header__area--middle > .header__container > .header__user')};
    get btnAddCardsNewCard () {return $('/html/body/main/div/div[2]/div/div/div/div/section/header/div[2]/div/div[2]/div[2]/a/button/div/span')}

    get input_CardNumber () {return $('/html/body/div[1]/form/div[1]/div[1]/label/div[1]/input')};
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password '//*[@id="iFrameResizer0"]'
     */
    async input_CardNum(cardNum){
        const iframe = $('//*[@id="iFrameResizer0"]')
        // const Text = $('//*[@id="root"]/form/div[1]/div[1]/label/span')
        // console.log(Text.getText());
        await browser.switchToFrame((iframe))
        await (await this.input_CardNumber).setValue(cardNum)
    }
    async clickBtnNewCard(){
        await(await this.btnAddCardsNewCard).click();
    }
    async awaitForModal(){
        browser.waitUntil(() => this.btnAbrirModalMyAccount.isExisting())
    }
    async openCardMyAccount(){
        await(await this.btnAddCards).click();
    }
    async btnAbrirModalMyAccountclick(){
        await(await this.btnAbrirModalMyAccount).click();
    }
    async close_NewsLetter(){
        await (await this.btn_close_newsletter).click();
    }
    async click_login(){
        await (await this.loginButton).click();
    }
    async click_Btnlogin (){
        await (await this.btn_login).click();
    }
    async click_btn_enter_email_password(){
        await (await this.btn_enter_email_password).click();
    }
    async typeUername(userName){
        await (await this.your_email).clearValue()
        await(await this.your_email).setValue(userName)
    }
    async typerPassword(password){
        await(await this.your_password).clearValue();
        await(await this.your_password).setValue(password)
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('');
    }
}

export default new LoginPage();
