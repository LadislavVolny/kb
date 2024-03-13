import { Page, Locator, expect } from '@playwright/test';

export class ProfiUcetPage {
    page: Page;
    mamZajemButton: Locator;
    hovorCard: Locator;
    pobockaCard: Locator;

    constructor(page: Page) {
        this.page = page;
        this.mamZajemButton = this.page.locator('a:has-text(" Mám zájem ")');
        this.hovorCard = this.page.getByTestId('cta-1219f85b-6629-48eb-8de6-008d7a4454a8');
        this.pobockaCard = this.page.getByTestId('cta-0cdeae99-121e-4271-8aeb-0bf09f16ff54');
    }
}