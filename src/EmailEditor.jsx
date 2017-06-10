import React, { Component } from 'react'
import { mjml2html } from 'mjml'
import Frame from 'react-frame-component'
import cheerio from 'cheerio'

import Overlay from './Overlay'
import OverlayHighlight from './OverlayHighlight'
import Email from './Email'

class EmailEditor extends Component {
  constructor(props, context) {
    super(props, context)
    const email = new Email(props)
    this.state = {
      email,
      editingContainer: false,
      editingSectionIndex: -1,
    }
  }

  sectionHtml(section) {
    const { html } = mjml2html(this.mjml(section.mjml))
    const $ = cheerio.load(html)
    return $($('.mj-container table')[0].parent).html()
  }

  mjml(content) {
    const { backgroundColor } = this.state.email
    return `
      <mjml>
        <mj-head>
          <mj-attributes>
            <mj-column vertical-align="top" width="100%" />
          </mj-attributes>
        </mj-head>
        <mj-body>
          <mj-container background-color="${backgroundColor}">
            ${content}
          </mj-container>
        </mj-body>
      </mjml>
    `
  }

  baseHtml() {
    return mjml2html(this.mjml()).html
  }

  handleEditSection(index) {
    return (event) => {
      event.stopPropagation()
      this.setState(() => ({
        editingSectionIndex: index,
        editingContainer: false,
      }))
    }
  }

  handleEditContainer(event) {
    event.stopPropagation()
    this.setState(() => ({
      editingContainer: true,
      editingSectionIndex: -1,
    }))
  }

  handleCancelEdit(event) {
    event.stopPropagation()
    this.setState(() => ({
      editingContainer: false,
      editingSectionIndex: -1,
    }))
  }

  render() {
    const { email, editingContainer, editingSectionIndex } = this.state
    const { subject, backgroundColor, sections } = email
    const editing = ((editingContainer || (editingSectionIndex > -1)) ? true : false)
    return(
      <div>
        { editing && <Overlay onClick={::this.handleCancelEdit} /> }
        <OverlayHighlight highlighted={editing}>
          <Frame
            initialContent={this.baseHtml()}
          >
            <div onClick={::this.handleEditContainer}>
              <div style={{
                width: '600px',
                margin: '0 auto',
                position: (editingContainer ? 'relative' : 'static'),
              }}>
                { editing && <Overlay onClick={::this.handleCancelEdit} /> }
                { sections.map((section, index) => (
                  <OverlayHighlight
                    highlighted={editingSectionIndex === index}
                    key={index}
                    onClick={::this.handleEditSection(index)}
                    dangerouslySetInnerHTML={{__html: this.sectionHtml(section)}}
                  />
                )) }
              </div>
            </div>
          </Frame>
        </OverlayHighlight>
      </div>
    )
  }
}

export default EmailEditor
