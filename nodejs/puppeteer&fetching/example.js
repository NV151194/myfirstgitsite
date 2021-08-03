import puppeteer from 'puppeteer';

const fetch = () => {
    (async() => {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto('https://example.com', { format: 'a4' }); // link from the fetching start
        await page.screenshot({ path: './png/example.png', }); // full page if the page is too long
        await page.pdf({ path: './pdf/hn.pdf', format: 'a4' }); // this is for pdf
        await browser.close();
    })();
};

const fetch1 = () => {
    (async() => {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto('https://example.com');

        // Get the "viewport" of the page, as reported by the page.
        const dimensions = await page.evaluate(() => {
            return {
                width: document.documentElement.clientWidth,
                height: document.documentElement.clientHeight,
                deviceScaleFactor: window.devicePixelRatio,
            };
        });

        console.log('Dimensions:', dimensions);

        await browser.close();
    })();
};

fetch();
fetch1();