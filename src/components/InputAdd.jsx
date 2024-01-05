import { useState } from "react"
/* import PropTypes from 'prop-types'
 */
export const InputAdd = ({ onNewCategory }) => {

  const [value, setValue] = useState('')

  const handleChange = ({ target }) => {
    setValue(target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (value.trim().length <= 1) return
    onNewCategory(value.trim())
    setValue('')
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          value={value}
          autoComplete="off"
          type="text"
          placeholder="Search"
          onChange={handleChange}
        />
      </form>
    </>
  )
}
/* 
InputAdd.propTypes = {
  onNewCategory : PropTypes.any.isRequired
} */