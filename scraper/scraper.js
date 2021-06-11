const puppeteer  = require('puppeteer');
const cheerio = require('cheerio');

const getPaste = async (req, res) => {
    try{
        const args = ['--proxy-server=socks5://127.0.0.1:9050']; // creates the proxy definition for puppeteer
        const browser = await puppeteer.launch({args}); // start the browser
        const page = await browser.newPage();
        await page.goto('http://nzxj65x32vh2fkhk.onion/all'); // Stronghold website
        const content = await page.content();
        const $ = cheerio.load(content, { 
            xml: {
                normalizeWhitespace: true,
            }
        });
        const postList = [];
        $('div[class = col-sm-12]').each((index, elem) => {
            const pasteContentNPSB = $(elem).find('.text').text();
            const pasteContent = pasteContentNPSB.split(/&nbsp;/);
            const post = {
                title: $(elem).find('h4').text(),
                author: $(elem).find('.col-sm-6').text(),
                content: pasteContent,
            }
            post.content[0] === '' ? null : postList.push(post); // add only pastes with content
        });
        await browser.close();
        console.log(postList);
    } catch(err){
        console.log(err.message);
    }
};

setInterval(getPaste, 120000);