const { test, expect } = require('@playwright/test');


test ('Login',async({page})=>{


  await page.goto('https://www.flipkart.com/');


  await page.fill('input[placeholder="Search for Products, Brands and More"]', '5g mobile');

  await page.click('text=5g mobile');

  await page.click('text=Apple iPhone 16 (Black, 256 GB)');

  // await page.click('text=₹84,900')

  // await page.pause();

  await page.click('text=Add to cart');

  // await page.click('//button[text()="Buy Now"]');
  

  await page.pause();

})