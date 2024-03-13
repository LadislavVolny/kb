// @ts-check
import { test, expect } from '@playwright/test';
import { MainMenu } from '../objects/mainMenu';
import { CookiePage } from '../objects/cookiePage';
import { PodnikatelePage } from '../objects/podnikatelePage';
import { ProfiUcetPage } from '../objects/profiUcetPage';
import { PobockaModalPage } from '../objects/pobockaModal';

let cookiePage: CookiePage;
let mainMenu: MainMenu;
let podnikatelePage: PodnikatelePage;
let profiUcetPage: ProfiUcetPage;
let pobockaModalPage: PobockaModalPage;

test.describe("kb_test", () => {
    test.beforeEach(async ({ page }) => {
        cookiePage = new CookiePage(page);
        mainMenu = new MainMenu(page);
        podnikatelePage = new PodnikatelePage(page);
        profiUcetPage = new ProfiUcetPage(page);
        pobockaModalPage = new PobockaModalPage(page);

        mainMenu.visitHomepage();
    });

    test("test_cookie", async () => {
        await cookiePage.cookieModal.waitFor({state: "visible", timeout: 2000});
        if (await cookiePage.isModalVisible()) {
            await cookiePage.acceptButton.click();
            await mainMenu.visitHomepage(); // reload to write the cookies into context
            await cookiePage.isCookieSet();
        }
    });

    test("test_modal", async () => {
        await mainMenu.menuPodnikatele.click();
    
        await expect.soft(await cookiePage.isModalVisible()).toBeFalsy();
        await podnikatelePage.produkty.hover();
        await podnikatelePage.produkty.click();
        await podnikatelePage.profiUcet.click();
    
        await profiUcetPage.mamZajemButton.click();
        await expect.soft(profiUcetPage.pobockaCard).toBeInViewport();
        await expect.soft(profiUcetPage.hovorCard).toBeInViewport();
        await profiUcetPage.pobockaCard.click();

        await pobockaModalPage.modal.waitFor({state: "visible", timeout: 2000});
        await pobockaModalPage.jmenoField.fill("Ladislav Volny");
        await pobockaModalPage.mobilField.fill("777111222");
        await pobockaModalPage.emailField.fill("vol@ny.cz");
        await pobockaModalPage.pokracovatButton.click();

        await pobockaModalPage.adresaField.waitFor({state: "visible", timeout: 3000});
        await pobockaModalPage.adresaField.fill("Kladno");

        await pobockaModalPage.dropdown.waitFor({state: "visible", timeout: 3000});
        await pobockaModalPage.dropdownThirdOptions.click();

        await expect.soft(pobockaModalPage.tabList).toBeVisible();
        await expect.soft(pobockaModalPage.tabMap).toBeVisible();

        await pobockaModalPage.zobrazitViceButton.click();
        await expect(pobockaModalPage.branchOptionButton).toHaveCount(10);
    });
});