class EmailButton {
  constructor(options) {
    this.options = options || {}
    const { href, sectionBackgroundColor, backgroundColor, text, color, fontSize } = this.options
    this.href = href || 'http://www.google.com.br'
    this.sectionBackgroundColor = sectionBackgroundColor || 'white'
    this.backgroundColor = backgroundColor || '#F88D5B'
    this.text = text || 'Clique aqui para aproveitar'
    this.color = color || 'white'
    this.fontSize = fontSize || '24px'
    this.mjml = `
      <mj-section background-color="${this.sectionBackgroundColor}">
        <mj-column>
          <mj-button font-size="${this.fontSize}" background-color="${this.backgroundColor}" color="${this.color}">
            ${this.text}
          </mj-button>
        </mj-column>
      </mj-section>
    `
  }
}

export default EmailButton
