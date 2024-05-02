// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const controlsList = [
  {
    label: 'Content',
    controlId: 'CONTENT',
  },
  {
    label: 'Left Navbar',
    controlId: 'LEFTNAVBAR',
  },
  {
    label: 'Right Navbar',
    controlId: 'RIGHT NAVBAR',
  },
]
const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value
      const onChangeControlItem = event => {
        if (event.target.id === controlsList[0].controlId) {
          onToggleShowContent(event.target.checked)
        } else if (event.target.id === controlsList[1].controlId) {
          onToggleShowLeftNavbar(event.target.checked)
        } else if (event.target.id === controlsList[2].controlId) {
          onToggleShowRightNavbar(event.target.checked)
        }
      }

      const getChecked = controlId => {
        if (controlId === controlsList[0].controlId) {
          return showContent
        } else if (controlId === controlsList[1].controlId) {
          return showLeftNavbar
        } else if (controlId === controlsList[2].controlId) {
          return showRightNavbar
        }
      }

      return (
        <div className="configuration-container">
          <h1 className="title">Layout</h1>
          <ul className="control-list">
            {controlsList.map(item => (
              <li className="control-item" key={item.controlId}>
                <input
                  className="check-box"
                  id={item.controlId}
                  type="checkbox"
                  onChange={onChangeControlItem}
                  checked={getChecked(item.controlId)}
                />
                <label className="checkbox-label" htmlFor={item.controlId}>
                  {item.label}
                </label>
              </li>
            ))}
          </ul>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
