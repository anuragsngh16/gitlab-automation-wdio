import { $ } from '@wdio/globals'
import Page from './page';

class LoginPage extends Page {
    
    get inputUsername () {
        return $('#user_login');
    }

    get inputPassword () {
        return $('#user_password');
    }

    get btnSignIn () {
        return $('button[data-testid="sign-in-button"]');
    }

    public async login (username: string, password: string) { 
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSignIn.click();
    }
}

export default new LoginPage();
