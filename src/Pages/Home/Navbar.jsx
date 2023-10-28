import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'

function Navbar() {
  // first we will set a const to check if the navbar is active or not(initially we will keep nav not active to default)
  const [navActive, setNavActive] = useState(false)

  // we will write a function that will open the nav
  const toggleNav = () => {
    setNavActive(!navActive)
  }

  // then a func that will close the nav
  const closeMenu = () => {
    setNavActive(false)
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 500) {
        closeMenu
      }
    }
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    if (window.innerWidth <= 1200) {
      closeMenu
    }
  }, [])

  //   here we will actually return our JSX(html)
  return (
    // here in className attribute we will be adding the class depending upon whether the navbar is active or not
    // so if the navbar is active it will add "navbar active" in the class attribute and if not active then it will add nothing
    <nav className={`navbar ${navActive ? 'active' : ''}`}>
      <div>
        <img src="./img/atharva.png" className="logo--img" alt="Logoipsum" />
      </div>
      <a
        className={`nav__hamburger ${navActive ? 'active' : ''}`}
        onClick={toggleNav}
      >
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
        <span className="nav__hamburger__line"></span>
      </a>
      <div className={`navbar--items ${navActive ? 'active' : ''}`}>
        <ul>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active--content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="heroSection"
              className="navbar--content"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active--content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="AboutMe"
              className="navbar--content"
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active--content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="mySkills"
              className="navbar--content"
            >
              My Skills
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              activeClass="navbar--active--content"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              to="MyPortfolio"
              className="navbar--content"
            >
              Portfolio
            </Link>
          </li>
        </ul>
      </div>
      <Link
        onClick={closeMenu}
        activeClass="navbar--active--content"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        to="Contact"
        className="btn btn-outline-primary"
      >
        Contact Me
      </Link>
    </nav>
  )
}
export default Navbar
