import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import iconTimes from '../../icons/times.svg'
import iconExclamation from '../../icons/exclamation.svg'
import { validateEmail } from '../../utils'
import './index.scss'

/**
 * @component Chip
 *
 * @param {string}      email
 * @param {function}    onDelete
 *
 * @description An individual chip component to represent an email
 *
 * @version 0.0.1
 */

const Chip = ({ email, onDelete }) => {
  const invalid = !validateEmail(email)
  const chipClass = classnames('chip', { invalid })
  return (
    <span className={chipClass}>
      <span className="chip-value">{email}</span>
      <button type="button" className="chip-delete-button" onClick={onDelete}>
        {invalid ? (
          <img src={iconExclamation} className="icon icon-exclamation" alt="icon-exclamation" />
        ) : (
          <img src={iconTimes} className="icon icon-times" alt="icon-times" />
        )}
      </button>
    </span>
  )
}

Chip.propTypes = {
  email: PropTypes.string,
  onDelete: PropTypes.func,
}

export default Chip
