const request = require('request');
const fs = require('fs');
const url = 'https://dou.ua/';
const linkArr = [];
let str = '', 
    catchLink = '';

request(url, function (error, response, body) {
  console.error('error:', error); 
  console.log('statusCode:', response && response.statusCode); 

  const getHTML = (HTMLBody) => {    
    const startStr = HTMLBody.indexOf('<div class="b-footer-slider m-hide">');
    const endStr = HTMLBody.indexOf('<footer class="b-footer">');

    for (let i = startStr; i < endStr; i++) {
      str = `${str}${HTMLBody[i]}`
    }     
  };

  getHTML(body);

  const cropLink = (string) => {
    
    let linkHead = string.indexOf('https://s.dou.ua/img/announces/'),
        linkFoot = string.indexOf('1.1x'),    
        resSent = string;   
    
    do {      
      catchLink = resSent.slice(linkHead, linkFoot);      
      linkArr.push(catchLink);      
      resSent = resSent.slice(linkFoot +1);      
      linkHead = resSent.indexOf('https://s.dou.ua/img/announces/');      
      linkFoot = resSent.indexOf('1.1x');
    } while (linkHead > 0);
  }
  cropLink(str);  
  console.log(linkArr);
});


