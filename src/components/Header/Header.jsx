import { Link } from 'react-router-dom'
import { useHeaderLogic } from './headerLogic'
import logo from '../../assets/images/logo-white.png'

const Header = () => {
  const navClass = useHeaderLogic()

  console.log({ navClass })

  return (
    <header className='header' data-header>
      <div className='container'>
        <div className='w-[230px]'>
          <Link to='/' className='logo w-fit rounded-[10px]'>
            <img src={logo} className='max-w-[115px] py-2 px-8 ' />
          </Link>
        </div>
        <nav className={navClass} data-navbar>
          <div className='wrapper'>
            <button
              className='nav-close-btn'
              aria-label='close menu'
              data-nav-toggler
            >
              <ion-icon name='close-outline' aria-hidden='true'></ion-icon>
            </button>
          </div>

          <ul className='navbar-list'>
            <li className='navbar-item'>
              <Link to='/' className='navbar-link' data-nav-link>
                Inicio
              </Link>
            </li>

            <li className='navbar-item'>
              <Link to='/services' className='navbar-link' data-nav-link>
                Servicios
              </Link>
            </li>

            <li className='navbar-item'>
              <Link to='/prices' className='navbar-link' data-nav-link>
                Precios
              </Link>
            </li>

            <li className='navbar-item navbar-item-contact'>
              <Link
                to='/contact'
                className='navbar-link navbar-item-contact'
                data-nav-link
              >
                Contacto
              </Link>
            </li>

            {/* <li className='navbar-item'>
              <Link to='/portafolio' className='navbar-link' data-nav-link>
                Portfolio
              </Link>
            </li> */}
          </ul>
        </nav>
        <button className='nav-open-btn' data-nav-toggler>
          <ion-icon name='menu-outline' aria-hidden='true'></ion-icon>
        </button>

        <Link
          to='/contact'
          className='btn btn-primary has-before has-after'
          // className='btn btn-secondary !bg-white has-before has-after'
        >
          Contactanos 👋
        </Link>

        <div className='overlay' data-nav-toggler data-overlay></div>
      </div>
    </header>
  )
}

export default Header
