let fs = require('fs');
const request = require('request');
const url = 'https://dou.ua';

request(url).pipe(
    fs.createWriteStream('dou-page.html')
);

request(url, function(error, response, body) {
  console.error('error:', error);
  console.log('statusCode:', response && response.statusCode); 

  const getHTML = (HTMLbody) => {
    const startStr = HTMLbody.indexOf('<h3>Радимо почитати');
    const endStr = HTMLbody.indexOf('<footer class="b-footer">');
    console.log(startStr, endStr);
    let str = '';
    for (let i = startStr; i < endStr; i++){      
        str = `${str}${HTMLbody[i]}`;
    }
    console.log(str);
  };
  getHTML(body);
});

