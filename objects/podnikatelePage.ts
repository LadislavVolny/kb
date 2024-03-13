import { Page, Locator, expect } from '@playwright/test';

export class PodnikatelePage {
    page: Page;
    produkty: Locator;
    profiUcet: Locator;

    constructor(page: Page) {
        this.page = page;
        this.produkty = this.page.locator('xpath=//html/body/header/div[3]/div/div/div/nav/div/ul/li[1]/a');
        this.profiUcet = this.page.locator('#a349835f-5ef5-4e7b-97d1-e44bb46d931b a[aria-label="Profi účet"]');
    }
}