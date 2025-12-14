import { Page, test } from '@playwright/test';
import { click, clickByIndex, hoverByIndex, mousehover, getText, scrollByPixels, type } from '../Test/Reusable_Actions';

test('Hover and Click on Elements @ai', async ({ page }) => {
    //navigate to usps
    await page.goto('https://www.usps.com/');
    //hover over to shop module
    await hoverByIndex(page, '[class="menuitem"]', 2, 'Shop module');
    await page.waitForTimeout(2000); // Wait for 2 seconds to ensure the hover effect is applied
    //click on stamps
    await click(page, '//*[text()="Stamps"]', 'Stamps Link');
    await page.waitForTimeout(2000); // Wait for 2 seconds to ensure the click action is completed
    //click on the stamps checkbox
    await clickByIndex(page,'[class="checkbox-label"]',0, 'Stamps checkbox');
    //check additional postage
    await clickByIndex(page, '[class="checkbox-label"]',4,'Additional postage checkbox');

    // scroll down by 300 pixels to view stamp options
    await scrollByPixels(page,0,300);
    // click on the first stamps
     
    await clickByIndex(page, '[class="result-product-img"]', 0, 'First Stamp Add to Cart Button');

    // click on add to cart button
    
    await clickByIndex(page,'[class="button-container"]',3,'add to cart button');
    
    await page.waitForTimeout(2700); // wait for few seconds
    
    //click on view cart button
    await click(page,'//*[text()="View Cart"]','view cart button');
    
    // update quantity to 2
    await type(page,'[class="col-8 form-control"]','2','Quantity box');
    
    //update cart button
    await click(page,'[value="Update"]', 'update cart button');

    // capture the information under the product
    let productInfo = await getText(page,'[class="item-wrapper"]',
    'product information');
    console.log("Product information: " + productInfo);


});

