import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
const { checkBrokenLinks } = require('../utils/linkChecker');



test('Smoke Test', async({ page }) => {
     
    // Create new instance of the page 
    const home = new HomePage(page);

    // go to home page 
    await home.gotoHome();

    // check links 
    const brokenLinks = await checkBrokenLinks(page);
    // Fail the test if broken links are found
     expect(brokenLinks.length).toBe(0);

    // verify the red flag
    await home.getRedFlagText();
    // verify Logo
    await home.verifyLogo();
   
 
 
    
});