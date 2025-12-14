import { Page } from "@playwright/test";

//method to click on a unique element
export async function click(page: Page, locator: string, elementName: string) {
    console.log("Clicking on " +elementName);
    await page.locator(locator).click();

}//end of click method

//method to click on any element by index
export async function clickByIndex(page: Page, locator: string, index: number, elementName: string) {
    console.log("Clicking on element " +elementName);
    await page.locator(locator).nth(index).click();

}//end of clickElementbyIndex

//method to type on any unique element
export async function type(page:Page, locator:string, userValue:string, elementName:string) {
    console.log("Typing on element " +elementName);
    let element = page.locator(locator);
    await element.fill('');
    await element.fill(userValue);  
}//end of type method

//method to type on any element by index
export async function typeByIndex(page:Page, locator:string, index:number, userValue:string, elementName:string) {
    console.log("Typing on element " +elementName);
    let element = page.locator(locator).nth(index);
    await element.fill('');
    await element.fill(userValue);
}//end of typeByIndex method

//method to get text from any unique element
export async function getText(page:Page, locator:string, elementName:string) {
    console.log("Getting text from element " +elementName);
    let result = await page.locator(locator).innerText();
    return result;
}//end of getText method

//method to get text from any element by index
export async function getTextByIndex(page:Page, locator:string, index:number, elementName:string) {
    console.log("Getting text from element " +elementName);
    let result = await page.locator(locator).nth(index).innerText();
    return result;
}//end of getTextByIndex method

//method to hover on unique element

export async function mousehover(page: Page, locator: string, elementName: string) {

    console.log("Hovering on " + elementName);

    await page.locator(locator).hover();

}//end of hover method



//method to hover on element by index

export async function hoverByIndex(page: Page, locator: string, index: number, elementName: string) {

    console.log("Hovering on " + elementName);

    await page.locator(locator).nth(index).hover();

}//end of hover by index method



//method to scroll by element

export async function scrollToElement(page: Page, locator: string, elementName: string) {

    console.log("Scrolling to " + elementName);

    await page.locator(locator).scrollIntoViewIfNeeded();

}//end of scroll to element method



//method to select drop down by visible text on unique element

export async function selectDropDown(page: Page, locator: string, visibleText: string, elementName: string) {

    console.log("Selecting " + visibleText + " from " + elementName);

    await page.locator(locator).selectOption({ label: visibleText });

}//end of select drop down method



//method to scroll by pixels using mousewheel

export async function scrollByPixels(page: Page, deltaX: number, deltaY: number) {

    console.log("Scrolling " + " by mouse wheel: (" + deltaX + ", " + deltaY + ")");

    await page.mouse.wheel(deltaX, deltaY);

}//end of scroll by mousewheel method



export async function tabByClick(page: Page, locator: string, elementName: string) {

    console.log("Clicking on " + elementName + " and waiting for new tab");

    const [newPage] = await Promise.all([

        page.context().waitForEvent('page'),

        page.locator(locator).click()

    ]);

    await newPage.waitForLoadState();

    return newPage;

}//end of tabByClick

