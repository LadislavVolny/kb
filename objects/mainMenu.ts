import { Page, Locator } from '@playwright/test';

export class MainMenu {
    page: Page;
    menuPodnikatele: Locator;
    menuObcane: Locator;

    constructor(page: Page) {
        this.page = page;
        this.menuPodnikatele = this.page.getByTestId("segment-desktop-5b13e6f2-bc20-41fa-a6d5-a36a68422762");
        this.menuObcane = this.page.getByTestId("segment-desktop-8b40a251-8da5-4c4c-a86e-65ecdcdf6496");
    }

    async visitHomepage() {
        await this.page.goto("/");
    }
}