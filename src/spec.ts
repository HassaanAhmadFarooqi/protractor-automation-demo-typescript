import { browser, ElementFinder} from 'protractor';
import { Calculator } from './calculator.po';

const calculator: Calculator = new Calculator();
const operators = calculator.operators;

describe('Protractor Demo App', () => {

    it('should have a title', async () => {
        await calculator.loadPage();
        const firstNumber: ElementFinder = await calculator.firstNumberElement();
        expect(await browser.getTitle()).toEqual('Super Calculator');
    });

    it('should read the value from an input', async () => {
        await calculator.inputFirstNumber(3);
        expect(await calculator.getFirstInputValue()).toEqual('3');

        await calculator.inputSecondNumber(4);
        expect(await calculator.getSecondInputValue()).toEqual('4');
    });

    it('should add one and two', async () => {
        await calculator.performOperation(operators.add, 1, 2);
        expect(await calculator.getLatestResult()).toEqual((1 + 2).toString());
    });

    it('should add four and six', async () => {
        await calculator.performOperation(operators.add, 4, 6);
        expect(await calculator.getLatestResult()).toEqual((4 + 6).toString());
    });

    it('should subtract four from six', async () => {
        await calculator.performOperation(operators.subtract, 6, 4);
        expect(await calculator.getLatestResult()).toEqual((6 - 4).toString());
    });

    it('should multiply four and six', async () => {
        await calculator.performOperation(operators.multiply, 4, 6);
        expect(await calculator.getLatestResult()).toEqual((4 * 6).toString());
    });

    it('should divide ten by three', async () => {
        await calculator.performOperation(operators.divide, 10, 3);
        expect(await calculator.getLatestResult()).toEqual((10 / 3).toString());
    });

    it('should have a history', async () => {
        await calculator.loadPage();

        await calculator.performOperation(operators.add, 1, 2);
        await calculator.performOperation(operators.subtract, 3, 4);
        expect(await calculator.history.count()).toEqual(2);

        await calculator.performOperation(operators.multiply, 5, 6);
        expect(await calculator.history.count()).toEqual(3);

        expect(await calculator.history.last().getText()).toContain('1 + 2');
        expect(await calculator.history.first().getText()).toContain('5 * 6');

        await browser.close();
    });
});
