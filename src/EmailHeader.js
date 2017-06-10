class EmailHeader {
  constructor(options) {
    this.options = options || {}
    const { imageUrl, imageWidth, backgroundColor, text, color, fontSize, currentShop } = this.options
    this.imageUrl = imageUrl || 'https://www.campuscapital.vc/wp-content/uploads/2016/11/your-logo-here.png'
    this.imageWidth = imageWidth || '150'
    this.backgroundColor = backgroundColor || 'dimgray'
    this.currentShop = currentShop
    if (currentShop) {
      this.text = text || `Bem-vindo à ${currentShop.name}`
    } else {
      this.text = text || 'Bem-vindo'
    }
    this.color = color || 'white'
    this.fontSize = fontSize || '32px'
    this.mjml = `
      <mj-section background-color="${this.backgroundColor}">
        <mj-column>
          <mj-image src="${this.imageUrl}" width="${this.imageWidth}" padding-bottom="40px" />
          <mj-text align="center" color="${this.color}" font-size="${this.fontSize}">
            ${this.text}
          </mj-text>
        </mj-column>
      </mj-section>
    `
  }
}

export default EmailHeader
