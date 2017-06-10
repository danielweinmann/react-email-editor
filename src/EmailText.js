class EmailText {
  constructor(options) {
    this.options = options || {}
    const { backgroundColor, text, color, fontSize } = this.options
    this.backgroundColor = backgroundColor || 'white'
    this.text = text || 'Para te desejar as boas-vindas, temos um super desconto para você!'
    this.color = color || 'dimgray'
    this.fontSize = fontSize || '18px'
    this.mjml = `
      <mj-section background-color="${this.backgroundColor}">
        <mj-column>
          <mj-text font-size="${this.fontSize}" color="${this.color}">
            ${this.text}
          </mj-text>
        </mj-column>
      </mj-section>
    `
  }
}

export default EmailText
