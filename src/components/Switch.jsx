import Sun from '../assets/svg/sun.svg'
import Moon from '../assets/svg/moon.svg'

export const Switch = ({ isDarkMode, onToggle }) => {
  return (
    <div>
      <label className="switch">
        {
          isDarkMode ? <img src={Sun} alt="light-mode" /> : <img src={Moon} alt="dark-mode" />
        }
        <input type="checkbox" className="input"
          checked={isDarkMode}
          onChange={onToggle} />
      </label>
    </div>
  )
}