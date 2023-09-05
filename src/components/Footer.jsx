const Footer = () => {
  return (
    <footer className='footer  text-white py-6'>
      <div className='container'>
        <div className='footer-bottom'>
          <p className='copyright'>
            &copy; 2023 BlueWave. Todos los derechos reservados por BlueWave
          </p>
          <ul className='footer-bottom-list'>
            <li>
              <a href='#' className='footer-bottom-link'>
                Terminos y condiciones.
              </a>
            </li>
            <li>
              <a href='#' className='footer-bottom-link'>
                Politica de privacidad
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
