import { Page, Locator, expect } from '@playwright/test';

export class PobockaModalPage {
    page: Page;
    modal: Locator;
    jmenoField: Locator;
    mobilField: Locator;
    emailField: Locator;
    pokracovatButton: Locator;

    adresaField: Locator;
    najitPobockuButton: Locator;

    dropdown: Locator;
    dropdownThirdOptions: Locator;

    tabList: Locator;
    tabMap: Locator;

    zobrazitViceButton: Locator;

    branchOptionButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.modal = this.page.locator('div.modal-dialog');
        this.jmenoField = this.page.getByPlaceholder('Karel Novák');
        this.mobilField = this.page.locator('input#phoneNumber');
        this.emailField = this.page.getByPlaceholder('karel.novak@email.cz');
        this.pokracovatButton = this.page.getByRole('button', { name: "Pokračovat" });
        this.adresaField = this.page.getByPlaceholder('Zadejte adresu');
        this.najitPobockuButton = this.page.getByRole('button', { name: "Najít pobočku"});

        this.dropdown = this.page.getByRole('listbox');
        this.dropdownThirdOptions = this.page.locator("#ngb-typeahead-0-2");

        this.tabList = this.page.getByTestId("tab-list");
        this.tabMap = this.page.getByTestId("tab-map");

        this.zobrazitViceButton = this.page.locator('div.showMore');
        this.branchOptionButton = this.page.locator("button.branchOption");
    }
}