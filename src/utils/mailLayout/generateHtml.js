import Handlebars from 'handlebars';
import fs from 'fs';
import __dirname from '../dirname.js';

const generateHtml = (user, layout = '') => {
  
  const template = Handlebars.compile(fs.readFileSync(__dirname+`/utils/mailLayout/${layout}`, 'utf-8'))
    
  const html = template({user});

  return html
};

export default generateHtml;