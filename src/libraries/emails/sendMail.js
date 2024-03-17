import nodemailer from 'nodemailer';
import Handlebars from 'handlebars';
import configObject from '../../config/index.js';
import __dirname from '../dirname.js'
import fs from 'fs';

const transport = nodemailer.createTransport({
  service: 'gmail', //host: smt.gmail.com
  port: 587,        // 465 + secure: true,
  auth: {
    user: configObject.gmail_user_app,
    pass: configObject.gmail_pass_app
  },
  tls: {
      rejectUnauthorized: false
  }
})
  
export const sendMail = async ( to, subject, bodyhtml) => {
  return await transport.sendMail({
    from: `${configObject.app_name} <${configObject.gmail_user_app}>`,
    to,
    subject,
    html: bodyhtml,
    // attachments: [
    //   {
    //     filename: 'think-about.png',
    //     path: __dirname + '/utils/sendMailUtil/think-about.png',
    //     contentType: 'Piensa'
    //   }]
  })
}

export const generateHtml = (options, layout = '') => {
  
  const template = Handlebars.compile(fs.readFileSync(__dirname+`/libraries/emails/layout/${layout}.hbs`, 'utf-8'))
    
  const html = template(options);

  return html
};

export const sendEmailwithLayout = async (option, subject, layout) => {
  try {
    const to       = option.user.email
    const bodyhtml = generateHtml(option, layout)

    await sendMail(to, subject, bodyhtml)

    return "E-mail send"
  } catch (error) {
    throw Error("Error sending email: " + error)
  }
}

export default sendEmailwithLayout;