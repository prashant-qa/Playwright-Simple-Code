# Playwright-Simple-Code

This project uses **Microsoft Playwright** for browser automation and end-to-end testing.  
Follow the steps below to install Playwright and run your tests.


A simple playwright code for order product and play youtube video


#1 
Installation & Setup playwright

playwright install command
npm init playwright@latest

#2
for run use this command 

npx playwright test Order.spec.js --project=chromium --headed
npx playwright test Youtube.spec.js --project=chromium --headed
