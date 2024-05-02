// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value
      console.log('showContent')
      console.log(showContent)
      console.log('showLeftNavbar')
      console.log(showLeftNavbar)
      console.log('showRightNavbar')
      console.log(showRightNavbar)
      return (
        <div className="body-container">
          {showLeftNavbar && (
            <div className="navbar">
              <h1 className="content-title">Left Navbar Menu</h1>
              <ul className="item-list">
                <li className="item">item 1</li>
                <li className="item">item 2</li>
                <li className="item">item 3</li>
                <li className="item">item 4</li>
              </ul>
            </div>
          )}
          {showContent && (
            <div className="content">
              <h1 className="content-title">Content</h1>
              <p className="content-para">Lorem ipsum dolor sit amet, consec</p>
            </div>
          )}
          {showRightNavbar && (
            <div className="navbar">
              <h1 className="content-title">Right Navbar Menu</h1>
              <p className="box">Ad 1</p>
              <p className="box">Ad 2</p>
            </div>
          )}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
