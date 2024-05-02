import {Component} from 'react'

import ConfigurationController from './components/ConfigurationController'
import ConfigurationContext from './context/ConfigurationContext'
import Layout from './components/Layout'

import './App.css'

class App extends Component {
  state = {showContent: true, showLeftNavbar: true, showRightNavbar: true}

  toggleShowContent = () => {
    this.setState(prev => ({showContent: !prev.showContent}))
  }

  toggleShowLeftBar = () => {
    this.setState(prev => ({showLeftNavbar: !prev.showLeftNavbar}))
  }

  toggleShowRightBar = () => {
    this.setState(prev => ({showRightNavbar: !prev.showRightNavbar}))
  }

  render() {
    const {showContent, showLeftNavbar, showRightNavbar} = this.state
    return (
      <ConfigurationContext.Provider
        value={{
          showContent,
          showLeftNavbar,
          showRightNavbar,
          onToggleShowContent: this.toggleShowContent,
          onToggleShowLeftNavbar: this.toggleShowLeftBar,
          onToggleShowRightNavbar: this.toggleShowRightBar,
        }}
      >
        <ConfigurationController />
        <Layout />
      </ConfigurationContext.Provider>
    )
  }
}

export default App
