import { Page, Locator, expect } from '@playwright/test';

const URL = "/obcane";

export class CookiePage {
    page: Page;
    cookieModal: Locator;
    acceptButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.cookieModal = this.page.locator('.cookie-bar');
        this.acceptButton = this.page.getByTestId("cookie-bar-accept-all");
    }

    async isCookieSet() {
        const cookies = await this.page.context().cookies();
        const cookie = cookies.find(cookie => cookie.name === 'CMSCookieLevelValue');
        await expect.soft(cookie?.value).toBe('preferential%7Canalytical%7Cmarketing');
    }

    isModalVisible(): Promise<boolean> {
        return this.cookieModal.isVisible();
    }
}