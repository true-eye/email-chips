import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Chip from '../Chip'
import { Keys } from '../../constants'
import './index.scss'

/**
 * @component EmailsInput
 *
 * @param {array}     initialEmails
 * @param {string}    placeholder
 *
 * @description A component accepts multiple email addresses
 *
 * @version 0.0.1
 */

const EmailsInput = ({ initialEmails = [] }) => {
  const [emails, setEmails] = useState(initialEmails)

  const addEmail = (event) => {
    let value = event.target.value

    if (!value) return

    let email = value.trim()

    if (email) {
      setEmails([...emails, email])
    }

    event.target.value = ''
  }

  const deleteEmail = (index) => {
    if (emails[index]) {
      setEmails([...emails.slice(0, index), ...emails.slice(index + 1)])
    }
  }

  const onKeyDown = (event) => {
    let keyPressed = event.which

    if (keyPressed === Keys.enter || (keyPressed === Keys.tab && event.target.value)) {
      event.preventDefault()
      addEmail(event)
    } else if (keyPressed === Keys.backspace) {
      if (!event.target.value && emails.length) {
        deleteEmail(emails.length - 1)
      }
    }
  }

  const focusInput = (event) => {
    let children = event.target.children

    if (children.length) children[children.length - 1].focus()
  }

  let chips = emails.map((email, index) => <Chip email={email} key={index} onDelete={() => deleteEmail(index)} />)

  return (
    <div className="emails" onClick={focusInput}>
      {chips}
      <input type="text" className="emails-input" onKeyDown={onKeyDown} />
    </div>
  )
}

EmailsInput.propTypes = {
  initialEmails: PropTypes.array,
  placeholder: PropTypes.string,
}

export default EmailsInput
