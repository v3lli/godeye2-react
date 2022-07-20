import React, { Component } from 'react'
import './Header.css';

class Header extends Component {
  state = {
    showNav: false
  }

  render() {
    const {showNav} = this.state;
    return (
    <div className="main-header justify-content-between align-items-center">
        <div className="brand-name">
            <strong> Emeka Onyejesi ™ </strong>
        </div>
            <nav id="menu" className={`nav, align-items-center, text-center, justify-content-center, ${showNav? 'show' : ''}`}>
            <ul>
                <a className="nav-link" aria-current="page" href="#">Home</a>
                <a className="nav-link" href="#">Collections</a>
                <a className="nav-link" href="#">Publications</a>
                <a className="nav-link" href="#">Diary</a>
                <a className="nav-link" href="#">Contact</a>
            </ul>
            {!showNav ? (
                <i
                onClick={() =>
                    this.setState({showNav:!this.state.showNav})
                }
                className = "cross fa-color fa-lg times"
            />
            ): null}
            {/* <fa v-if="!showNav" @click="toggleNav" className="cross fa-color fa-lg" icon = "times"/> */}
        </nav>
        {showNav ? (
                <i
                onClick={() =>
                    this.setState({showNav:!this.state.showNav})
                }
                className = "hamburger fa-lg bars"
            />
            ): null}
        {/* <fa v-if="showNav" @click="toggleNav" className="hamburger fa-lg" icon = "bars"/> */}
    </div>
    )
  }
}


export default Header;