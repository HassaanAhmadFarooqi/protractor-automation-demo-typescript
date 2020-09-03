import { browser, by, element, ElementFinder, ElementArrayFinder, } from 'protractor';

export class Calculator {
    private firstNumber: ElementFinder = element(by.model('first'));
    private secondNumber: ElementFinder = element(by.model('second'));
    private operatorSelector: ElementFinder = element(by.model('operator'));
    private goButton: ElementFinder = element(by.id('gobutton'));
    private latestResult: ElementFinder = element(by.binding('latest'));
    public history: ElementArrayFinder = element.all(by.repeater('result in memory'));

    public operators = {
        add: 'ADDITION',
        subtract: 'SUBTRACTION',
        multiply: 'MULTIPLICATION',
        divide: 'DIVISION',
        modulo: 'MODULO',
    }

    async firstNumberElement(): Promise<ElementFinder> {
        return this.firstNumber;
    }

    async loadPage(): Promise<void> {
        await browser.get('http://juliemr.github.io/protractor-demo/');
    }

    async inputFirstNumber(input: string | number): Promise<void> {
        await this.firstNumber.clear();
        await this.firstNumber.sendKeys(input);
    }

    async inputSecondNumber(input: string | number): Promise<void> {
        await this.secondNumber.clear();
        await this.secondNumber.sendKeys(input);
    }

    async getFirstInputValue(): Promise<string> {
        return this.firstNumber.getAttribute('value');
    }

    async getSecondInputValue(): Promise<string> {
        return this.secondNumber.getAttribute('value');
    }

    async selectOperator(operator: string): Promise<void> {
        await this.operatorSelector.click();
        await this.operatorSelector.element(by.css(`[value=${operator}]`)).click();
    }

    async performOperation(operator: string, firstInput: string | number, secondInput: string | number): Promise<void> {
        await this.inputFirstNumber(firstInput);
        await this.inputSecondNumber(secondInput);
        await this.selectOperator(operator);
        await this.goButton.click();
    }

    async getLatestResult(): Promise<string> {
        return this.latestResult.getText();
    }
}
