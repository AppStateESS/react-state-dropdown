'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import States from './States'

const StateDropdown = ({handle, value, abbr}) => {
  let stateList = States.map((value, key) => {
    const label = abbr
      ? value.abbr
      : value.full
    return (
      <option key={key} value={value.abbr}>{label}</option>
    )
  })
  return (
    <div>
      <select name="state" value={value} onChange={handle} className="form-control">
        {stateList}
      </select>
    </div>
  )
}

StateDropdown.propTypes = {
  value: PropTypes.string.isRequired,
  handle: PropTypes.func.isRequired,
  abbr: PropTypes.bool
}

export default StateDropdown
