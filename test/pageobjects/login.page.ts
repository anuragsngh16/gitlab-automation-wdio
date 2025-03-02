import { $ } from '@wdio/globals'
import Page from './page';

class LoginPage extends Page {
    
    get inputUsername(): ChainablePromiseElement {
        return $('#user_login');
    }

    get inputPassword(): ChainablePromiseElement {
        return $('#user_password');
    }

    get btnSignIn(): ChainablePromiseElement {
        return $('button[data-testid="sign-in-button"]');
    }

    public async login (username: string, password: string): Promise<void> { 
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSignIn.click();
    }
}

export default new LoginPage();
