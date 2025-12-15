import { Page, test } from '@playwright/test';
import { click, clickByIndex, getTextByIndex, scrollByPixels, type } from '../Test/Reusable_Actions';

test('dentist phone number @ai', async ({ page }) => {

    //navigate to UHC website
    await page.goto('https://www.uhc.com/');
    
    //await page.waitForTimeout(3000);
    //click on shop for a plan
    await clickByIndex (page, "//*[text()='Find a doctor']", 0, "Find a doctor");

   

    //click on search as a guest
    await clickByIndex (page, "//*[@class='cta--desktop-item ']", 3, "Search as a guest");

    //click on dental directory link
    await click(page, "[aria-label='Dental Directory']", "Dental directory");
    await page.waitForTimeout(3000);

    //click on medicaid link
    await clickByIndex(page, "//*[@class='sc-iugpza kDcyKX']", 3, "Medicaid plan");

    await page.waitForTimeout(3000);

    //enter street address
    await type(page, "//*[@id='location']", "19 Elmwood Avenue, Buffalo, NY 14222", "Street address");
    await page.waitForTimeout(3000);
    await page.keyboard.press('Enter');
    await page.waitForTimeout(2000);

    //select first address from the dropdown
    await clickByIndex(page, "[type='button']", 1, "Address from dropdown"); 

    //click on continue button
    

    await click(page, "[class='action-btn dialog-btn noZip']", "Continue button");

    await page.waitForTimeout(3000);

    //click on NY Community Plan Essential Plan Program
    await clickByIndex(page, "//*[@class='sc-ifjxht fIHPez']", 0, "NY Community Plan Essential Plan Program");
    
    await page.waitForTimeout(3000);
    await scrollByPixels(page, 0, 400);

    //click on general dentist
    await clickByIndex(page, "//*[@class='sc-iugpza kDcyKX']", 0 , "General dentist");
    await page.waitForTimeout(3000);

    //scroll down to see the dentist details
    await scrollByPixels(page, 0, 400);

    //capture capture the first dentist phone number and print it out
    let dentistPhoneNumber = await getTextByIndex(page, "//*[@data-test-id='phone-number']", 0, "Phone number");
    console.log("The phone number of the first dentist is: " + dentistPhoneNumber); 

});