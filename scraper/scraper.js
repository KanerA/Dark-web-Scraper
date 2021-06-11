const cheerio = require('cheerio');
const tr = require('tor-request');
const axios = require('axios');

// tr.setTorAddress('tor_proxy');
const getPaste = async () => {
    try{
        tr.request('http://nzxj65x32vh2fkhk.onion/all', async (err, res, body) => {
            if (!err && res.statusCode == 200) {
                const $ = cheerio.load(body, { 
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
                console.log(postList);
                const response = await axios.post('http://localhost:8080/paste', postList);
            }
        });
    } catch (err){
        console.log(err.message);
    }
};

setInterval(getPaste, 120000);