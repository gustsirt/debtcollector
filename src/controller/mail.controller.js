import generateHtml from "../utils/mailLayout/generateHtml.js";

import { sendMail } from "../utils/sendMail.js";

class MailController {
  constructor() {}

  send = async (req, res) => {
    const { layout } = req.query

    try {
      const user = req.user

      const to       = user.email
      const subjet   = 'Bienvenido a DebtCollector'
      const bodyhtml = generateHtml(user, layout+'.hbs')

      sendMail(to, subjet, bodyhtml)

      res.sendSuccess('mail enviado')
    } catch (error) {
      res.sendCatchError(error)
    }
  }
}

export default MailController;