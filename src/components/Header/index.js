import {Component} from 'react'
import {Link} from 'react-router-dom'
import {HiOutlineSearch} from 'react-icons/hi'
import {AiFillCloseCircle} from 'react-icons/ai'
import {MdMenuOpen} from 'react-icons/md'
import './index.css'

class Header extends Component {
  state = {showMenu: false, currentPath: ''}

  componentDidMount() {
    const path = window.location.pathname
    this.setState({currentPath: path})
  }

  

  toggleMenuItems = () => {
    this.setState(prevState => ({showMenu: !prevState.showMenu}))
  }

  onChangeSearchInput = event => {
    const {setSearchInput} = this.props
    setSearchInput(event.target.value)
  }

  onKeyDownEnter = event => {
    const {fetchMovies} = this.props
    if (event.key === 'Enter') {
      fetchMovies()
    }
  }

  render() {
    const {showMenu, currentPath} = this.state
   
    const homeClassName = currentPath === '/' ? 'selected' : null
    const popularClassName = currentPath === '/popular' ? 'selected' : null
    const accountClassName = currentPath === '/account' ? 'selected' : null
    return (
      <nav>
        <div className="navbar">
          <div className="navbar-logo-link-container">
            <Link to="/">
              <img
                src="https://res.cloudinary.com/dc2b69ycq/image/upload/v1669787785/Movies%20App/Movies_Logo_nu3gsl.png"
                alt="website logo"
                className="website-logo"
              />
            </Link>

            <ul className="header-link-container">
             
              <Link to="/upcoming" className="route-link">
                <li className={`header-link ${popularClassName}`}>UPCOMING</li>
              </Link>
              <Link to="/top-rated" className="route-link">
                <li className={`header-link ${popularClassName}`}>TopRated</li>
              </Link>
            </ul>
          </div>
          <div className="search-and-avatar">
            <div className="search-container">
              
                <input
                  type="search"
                  className="search-input"
                  onChange={this.onChangeSearchInput}
                  onKeyDown={this.onKeyDownEnter}
                />
              
              <Link to="/search">
                <button
                  type="button"
                  className="search-button"
                  onClick={this.onShowSearchInput}
                  testid="searchButton"
                >
                  <HiOutlineSearch size={18} color="#ffffff" />
                </button>
              </Link>
            </div>
            <Link to="/account">
              <img
                src="https://res.cloudinary.com/dc2b69ycq/image/upload/v1669785109/Movies%20App/Vector_Avatar1_hiwft7.png"
                alt="profile"
                className="avatar-image"
              />
            </Link>
            <button
              type="button"
              className="menu-button"
              onClick={this.toggleMenuItems}
            >
              <MdMenuOpen />
            </button>
          </div>
        </div>

        {showMenu && (
          <ul className="menu-link-container">
            <Link to="/" className="route-link">
              <li className={`menu-link ${homeClassName}`}>TOP RATED</li>
            </Link>
            <Link to="/popular" className="route-link">
              <li className={`menu-link ${popularClassName}`}>UPCOMING</li>
            </Link>
            <Link to="/account" className="route-link">
              <li className={`menu-link ${accountClassName}`}>Account</li>
            </Link>
            <li>
              <button
                type="button"
                className="close-button"
                onClick={this.toggleMenuItems}
              >
                <AiFillCloseCircle />
              </button>
            </li>
          </ul>
        )}
      </nav>
    )
  }
}

export default Header