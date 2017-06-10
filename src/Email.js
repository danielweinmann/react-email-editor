import EmailHeader from './EmailHeader'
import EmailText from './EmailText'
import EmailButton from './EmailButton'
import EmailFooter from './EmailFooter'

class Email {
  constructor(options) {
    this.options = options || {}
    const { subject, backgroundColor } = this.options
    const sections = this.options.sections || []
    this.backgroundColor = backgroundColor || '#eeeeee'
    this.subject = subject || 'Bem-vindo!'
    this.sections = sections.map(section => {
      const { options } = section
      switch (section.type) {
        case "header":
          return new EmailHeader(options)
        case "text":
          return new EmailText(options)
        case "button":
          return new EmailButton(options)
        case "footer":
          return new EmailFooter(options)
        default:
          return null
      }
    }).filter(section => (!!section))
  }
}

export default Email
