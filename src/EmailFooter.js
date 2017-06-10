class EmailFooter {
  constructor(options) {
    this.options = options || {}
    const { backgroundColor, text, color, fontSize } = this.options
    this.backgroundColor = backgroundColor || '#cccccc'
    this.text = text || 'Muito obrigado pela preferência :D'
    this.color = color || 'dimgray'
    this.fontSize = fontSize || '18px'
    this.mjml = `
      <mj-section background-color="${this.backgroundColor}">
        <mj-column>
          <mj-text align="center" font-size="${this.fontSize}" color="${this.color}">
            ${this.text}
          </mj-text>
        </mj-column>
      </mj-section>
    `
  }
}

export default EmailFooter
