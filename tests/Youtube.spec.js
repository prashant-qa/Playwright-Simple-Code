const { test, expect } = require('@playwright/test');


test ('Login',async({page})=>{


  await page.goto('https://www.Youtube.com/');


  await page.fill('input[placeholder="Search"]', 'Sambata');

  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('Enter');


  await page.click('text=BLACK MONEY - LOKA X SAMBATA (OFFICIAL MUSIC VIDEO)');
  
  await page.pause();

})