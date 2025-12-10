import { Page, test } from "@playwright/test";
test('Weight Watchers Zip code search', async ({ page }) => {
    //declare array for zip codes
    let zipCode = new Array<string>()
    zipCode.push('14215')
    zipCode.push('14223')
    for (let i = 0; i < zipCode.length; i++) {
        //navigate to Weight Watchers
        await page.waitForTimeout(2000);
        await page.goto('https://www.weightwatchers.com/us/')
        //click on find a workshop link
        await page.waitForTimeout(2000);
        await page.locator('text=Find a Workshop').click();
        
    }
    


    




})
