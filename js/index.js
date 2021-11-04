const puppeteer = require('puppeteer');

const start = (async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://dou.ua');
  
  await page.waitForSelector('body > div.g-page > div.b-footer-slider.m-hide > div:nth-child(2)')
  const subs = await page.$eval('body > div.g-page > div.b-footer-slider.m-hide > div:nth-child(2)', (el) => el.innerText);
  console.log(subs);

  await browser.close();
});

start();