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
                    const pasteContent = pasteContentNPSB.split(/&nbsp;/); // split the content by non breaking spaces that exist.
                    const trimmedContent = removeTrailingSpaces(pasteContent);
                    const title = removeTrailingSpaces($(elem).find('h4').text());
                    const author = removeTrailingSpaces($(elem).find('.col-sm-6').text());
                    if(!trimmedContent) return ;
                    const post = {
                        title,
                        author,
                        content: trimmedContent,
                    }
                    postList.push(post);
                });
                console.log(postList);
                const response = await axios.post('http://localhost:8080/paste', postList);
            }
        });
    } catch (err){
        console.log(err.message);
    }
};
    
const removeTrailingSpaces = (strToTrim) => {
    // --------- for title, author, date etc. ----------------- //
    if(typeof strToTrim === 'string'){
        const trimmedStr = strToTrim.trim();
        return trimmedStr;
    }
    // --------- for content arrays ---------------------- //
    const filteredStrArr = strToTrim.filter(str => { // filter empty strings
        const trimmedStr = str.trim();
        if(trimmedStr.length === 0) return ;
        return trimmedStr;
    });
    if(filteredStrArr.length === 0) return null; // check if the string isn't empty
    const trimmedArr = filteredStrArr.map(str => { // trim the trailing spaces
        const trimmedStr = str.trim();
        return trimmedStr;
    })
    return trimmedArr;
};

// setInterval(getPaste, 120000);
setInterval(getPaste, 5000);